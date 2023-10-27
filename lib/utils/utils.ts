export function absoluteUrl(path: string) {
  //return path;
  return `${process.env?.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}${path}`
}

export function imageUrl(image:string | undefined, basePath: string | undefined){
  return image ?? '';
  //return image != null ? basePath != null && basePath != '' ? `/${basePath}/${image}` : image : ''
}