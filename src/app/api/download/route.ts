import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const url = req.nextUrl.searchParams.get('url');
    const name = req.nextUrl.searchParams.get('name') || 'download';

    if (!url) {
      return new NextResponse('Missing URL parameter', { status: 400 });
    }

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/pdf,application/octet-stream,*/*;q=0.9',
      }
    });
    
    if (!response.ok) {
      console.error(`Cloudinary returned ${response.status} for URL: ${url}`);
      return new NextResponse('Failed to fetch file', { status: response.status });
    }

    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    let extension = 'pdf';
    if (contentType.includes('jpeg') || contentType.includes('jpg')) extension = 'jpg';
    else if (contentType.includes('png')) extension = 'png';
    else if (contentType.includes('webp')) extension = 'webp';

    const fileBuffer = await response.arrayBuffer();
    const cleanName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': `attachment; filename="${cleanName}_notice.${extension}"`,
        'Content-Type': contentType,
      },
    });
  } catch (error) {
    console.error('Download proxy error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
