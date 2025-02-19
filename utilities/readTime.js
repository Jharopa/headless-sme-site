function getWordCount(content) {
  return content
    .replace(/<[^>]+>/g, '')
    .trim()
    .split(/\s+/).length;
}

function getReadTime(content) {
  var wordCount = getWordCount(content);
  var readTime = wordCount / 250;
  return readTime < 1 ? '< 1 min' : Math.round(readTime) + ' min';
}

export default getReadTime;
