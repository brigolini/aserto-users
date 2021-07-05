
export const isoToUSFormat = (dt:string) => {
  const options = {
    year: "numeric", month: "numeric", day: "numeric",
    hour: 'numeric', minute: 'numeric', second: 'numeric',
  };
  // @ts-ignore
  return new Intl.DateTimeFormat('en-US', options).format(Date.parse(dt))
}
