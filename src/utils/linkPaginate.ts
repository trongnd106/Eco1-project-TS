const linkPaginate =(link:any)=>{
    const links: { [key: string]: any } = {};
const regex = /<([^>]*)>; rel="([^"]*)"/g;
let match;
while ((match = regex.exec(link)) !== null) {
  console.log(match);

  const [, url, rel] = match;
  console.log(url, rel);

  links[rel] = url;
}

return links
}

export default linkPaginate