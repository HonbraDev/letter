function downloadFile(content: string, name: string) {
  const hidden = document.createElement("a");
  hidden.href = "data:attachment/text," + encodeURI(content);
  hidden.target = "_blank";
  hidden.download = encodeURI(name);
  hidden.click();
}

export default downloadFile;
