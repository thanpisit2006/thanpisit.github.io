const snowContainer = document.getElementById("snow-container");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
    snowflake.innerHTML = "&#10052;";
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100);

// BAR
function showPage(pageId) {
    // ซ่อนทุกหน้าก่อน
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none';
    });
  
    // แสดงหน้าที่ต้องการ
    const activePage = document.getElementById(pageId);
    if (activePage) {
      activePage.style.display = 'block';
    }
  }

// คำนวณความยาว 70% ของ viewport width
const viewportWidth = window.innerWidth; // ดึงค่าความกว้างหน้าต่าง
const lengthInPx = 0.7 * viewportWidth;

console.log(`ความยาว 70% ของหน้าต่าง HTML: ${lengthInPx}px`);

//const lengthInPx / 900 = x;
//const x * lengthInPx = y;