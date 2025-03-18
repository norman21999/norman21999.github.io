<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download Landing Page</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #87CEEB; /* Голубой фон */
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .container {
            text-align: center;
        }
        .download-button {
            background-color: #ffffff;
            border: none;
            padding: 20px 40px;
            font-size: 24px;
            cursor: pointer;
            border-radius: 5px;
            transition: box-shadow 0.3s ease;
        }
        .download-button:hover {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
        }
        .progress-bar {
            width: 0;
            height: 5px;
            background-color: #4caf50;
            transition: width 2s;
            margin-top: 20px;
            display: none; /* Скрыть изначально */
        }
    </style>
</head>
<body>

<div class="container">
    <button class="download-button" id="downloadButton">Download</button>
    <div class="progress-bar" id="progressBar"></div>
</div>

<script>
    const downloadButton = document.getElementById('downloadButton');
    const progressBar = document.getElementById('progressBar');

    downloadButton.addEventListener('click', function() {
        progressBar.style.display = 'block';
        progressBar.style.width = '0%';

        // Плавный переход к полной ширине прогресс-бара
        setTimeout(() => {
            progressBar.style.width = '100%';
        }, 100);

        // Переход на ссылку через 2 секунды
        setTimeout(() => {
            window.location.href = 'https://example.com'; // Замените на вашу ссылку
        }, 2000);
    });
</script>

</body>
</html>
