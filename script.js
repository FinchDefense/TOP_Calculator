const container = document.querySelector(".container");

const title_pt1 = document.createElement("p");
title_pt1.textContent = "CHECK OUT THIS";
title_pt1.style.fontFamily = "Playfair Display, Georgia, serif";
title_pt1.style.fontSize = "25px";
title_pt1.style.fontWeight = "400";
title_pt1.style.letterSpacing = "8px";
title_pt1.style.textTransform = "uppercase";
title_pt1.style.fontStyle = "italic";
container.appendChild(title_pt1);

const title_pt2 = document.createElement("p");
title_pt2.textContent = "CALCULATOR";
title_pt2.style.fontFamily = "Poppins, Helvetica, sans-serif";
title_pt2.style.fontSize = "50px";
title_pt2.style.fontWeight = "700";
title_pt2.style.letterSpacing = "12px";
title_pt2.style.marginTop = "-20px";
container.appendChild(title_pt2);

