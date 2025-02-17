/*
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
*/

function htmlspecialchars(formData) {
  return formData.replace(/[&"<>]/g, char => {
    switch(char) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case '&': return '&amp;';
      default: return char;
    }
  });
}
