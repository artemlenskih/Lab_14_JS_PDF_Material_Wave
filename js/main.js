document.getElementById('download-pdf').addEventListener('click', () => {
    const element = document.getElementById('resume');
    
    // Клонируем элемент, чтобы манипуляции не были видны на экране
    const clone = element.cloneNode(true);
    
    // Создаем временный контейнер, прижатый к углу, чтобы избежать обрезки
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = '-9999px'; // Прячем за экран
    container.style.top = '0';
    container.style.width = '210mm'; // Жестко задаем ширину A4
    container.appendChild(clone);
    document.body.appendChild(container);

    const opt = {
        margin: [10, 10, 10, 10],
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            logging: false,
            width: element.offsetWidth, // Берем реальную ширину
            scrollY: 0,
            scrollX: 0
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };

    // Печатаем клон и удаляем его
    html2pdf().set(opt).from(clone).save().then(() => {
        document.body.removeChild(container);
    });
});