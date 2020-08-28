let textColor = ['success','primary','secondary','info','danger','warning','success','primary','secondary','info','danger','warning','success','dark','info','warning'];
 const shuffle = (color) => {
     for (let i = 0; i < color.length; i++) {
         const j = Math.round(Math.random() * i);
         [color[i], color[j]] = [color[j], color[i]];
     }
 }
 shuffle(textColor);

 export default textColor;