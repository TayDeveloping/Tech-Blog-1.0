module.exports = {
    // Format date to MM/DD/YYYY
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
  
    // Format plural words based on count
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
      return word;
    },
  
    // Truncate long content
    truncate: (content, limit) => {
      if (content.length > limit) {
        return content.substring(0, limit) + '...';
      }
      return content;
    }
  };