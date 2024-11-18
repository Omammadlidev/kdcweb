// script.js

document.getElementById('certificate-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Kullanıcının girdiği kod
    const userCode = document.getElementById('code').value;
    
    // Geçerli kodu tanımlayın (örneğin '12345')
    const validCode = '12345'; 

    if (userCode === validCode) {
        // Sertifika linki oluştur
        const certificateLink = document.createElement('a');
        certificateLink.href = 'path/to/certificate.pdf';  // Sertifikanın yolunu buraya ekleyin
        certificateLink.download = 'sertifika.pdf';  // Sertifika adı
        certificateLink.textContent = 'Sertifikanızı indirmek için tıklayın';
        
        // Hata mesajını gizle ve sertifika linkini göster
        document.getElementById('error-message').style.display = 'none';
        document.body.appendChild(certificateLink);
    } else {
        // Geçersiz kod mesajını göster
        document.getElementById('error-message').style.display = 'block';
    }
});
