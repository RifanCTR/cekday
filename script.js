document.getElementById("life-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Ambil data input dari user
    const name = document.getElementById("name").value;
    const birthDate = parseInt(document.getElementById("birth-date").value);
    const birthMonth = parseInt(document.getElementById("birth-month").value);
    const birthYear = parseInt(document.getElementById("birth-year").value);
    
    // Tentukan tanggal lahir user
    const birthDay = new Date(birthYear, birthMonth - 1, birthDate);
    
    // Tentukan hari apa user lahir
    const dayOfWeek = birthDay.toLocaleString("id-ID", { weekday: "long" });

    // Hitung berapa lama user telah hidup dalam hari
    const today = new Date();
    const livedDays = Math.floor((today - birthDay) / (1000 * 60 * 60 * 24));

    // Hitung usia user
    const age = today.getFullYear() - birthYear;
    const monthDiff = today.getMonth() - (birthMonth - 1);
    const dayDiff = today.getDate() - birthDate;
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Tentukan motivasi berdasarkan usia
    let motivationMessage = "";
    if (age < 20) {
        motivationMessage = "Anda masih muda di antara banyaknya remaja yang terlena dengan kenikmatan yang menipu. Menjadi taat tidak akan membuat Anda terlihat cupu.";
    } else if (age < 30) {
        motivationMessage = "Usia Anda adalah masa yang penuh potensi. Manfaatkan setiap kesempatan untuk belajar dan berkembang.";
    } else if (age < 50) {
        motivationMessage = "Anda memiliki banyak pengalaman hidup. Jadikan pengalaman tersebut sebagai pelajaran berharga.";
    } else {
        motivationMessage = "Usia Anda adalah puncak kebijaksanaan. Terus berbagi pengetahuan dan inspirasi kepada generasi berikutnya.";
    }

    // Tampilkan hasil
    document.getElementById("result-name").textContent = `Anda Lahir Pada: ${birthDate}-${birthMonth}-${birthYear}`;
    document.getElementById("result-day").textContent = `Anda Lahir Pada Hari: ${dayOfWeek}`;
    document.getElementById("result-lived").textContent = `Anda Telah Hidup Selama: ${livedDays} hari`;
    document.getElementById("result-age").textContent = `Usia Anda: ${age} tahun`;
    document.getElementById("motivation-message").textContent = motivationMessage;

    // Tampilkan hasil dan sembunyikan form
    document.getElementById("form-section").style.display = "none";
    document.getElementById("result-section").style.display = "block";
});

// Fungsi untuk mengulang proses
document.getElementById("repeat-yes").addEventListener("click", function() {
    // Reset form
    document.getElementById("life-form").reset();
    document.getElementById("form-section").style.display = "block";
    document.getElementById("result-section").style.display = "none";
});

document.getElementById("repeat-no").addEventListener("click", function() {
    alert("Terima kasih telah menggunakan program ini!");
});
