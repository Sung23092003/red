document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.case-study__links a');
    const tabPanels = document.querySelectorAll('.tab-panel');

    // pagination
    const totalPages = 10; //  chỉnh tổng số trang ở đây
    const pagination = document.querySelector(".pagination");

    // tablink
    tabLinks.forEach((tab, index) => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // 1. Bỏ class 'active' khỏi tất cả tab
            tabLinks.forEach(t => t.classList.remove('active'));

            // 2. Thêm class 'active' vào tab được click
            tab.classList.add('active');

            // 3. Ẩn tất cả tab-panels
            tabPanels.forEach(panel => {
                panel.style.display = 'none';
                panel.classList.remove('active');
            });

            // 4. Kiểm tra nếu là tab "All"
            const isAllTab = !tab.hasAttribute('data-index');
            if (isAllTab) {
                // Không hiển thị tab-panel nào
                return;
            }

            // 5. Nếu không phải "All", hiển thị tab-panel theo index
            const tabIndex = tab.getAttribute('data-index');

            const selectedPanel = document.querySelector(`.tab-panel[data-index="${tabIndex}"]`);
            if (selectedPanel) {
                selectedPanel.style.display = 'flex';
                selectedPanel.classList.add('active');
            }
        });
    });

    // Kích hoạt mặc định tab đầu tiên ("All")
    tabLinks[0].click();


    // phân trang 
    function renderPagination(total) {
        let html = "";

        // Nút prev
        html += `<li><a href="#">«</a></li>`;

        // Trang 1 -> 3
        for (let i = 1; i <= Math.min(3, total); i++) {
            html += `<li><a href="#" class="${i === 1 ? "active" : ""}">${i}</a></li>`;
        }

        // Nếu nhiều hơn 3 trang thì thêm dấu ...
        if (total > 3) {
            html += `<li><span>...</span></li>`;
            html += `<li><a href="#">${total}</a></li>`; // Trang cuối
        } else if (total === 4) {
            html += `<li><a href="#">4</a></li>`;
        }

        // Nút next
        html += `<li><a href="#">»</a></li>`;

        pagination.innerHTML = html;
    }

    renderPagination(totalPages);
});
