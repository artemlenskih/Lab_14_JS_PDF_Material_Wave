document.getElementById('download-pdf').addEventListener('click', () => {
    const element = document.getElementById('resume');

    const clone = element.cloneNode(true);

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    container.style.top = '0';
    container.style.width = '210mm';
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
            width: element.offsetWidth,
            scrollY: 0,
            scrollX: 0
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };

    html2pdf().set(opt).from(clone).save().then(() => {
        document.body.removeChild(container);
    });
});