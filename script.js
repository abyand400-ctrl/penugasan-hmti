function buatForm() {
    let jumlah = document.getElementById("jumlahMatkul").value;
    let form = document.getElementById("formNilai");
    form.innerHTML = "";

    for (let i = 1; i <= jumlah; i++) {
        form.innerHTML += `
            <label>Mata Kuliah ${i}</label>
            <select id="nilai${i}">
              <option value="6">Dasar pemerograman</option>
              <option value="5">Bahasa indonesia</option>
                <option value="4">fisika</option>
                <option value="3">Kalkulus</option>
                <option value="2">Dasar Dasar komputasi</option>
                <option value="1">Pengantar Teknologi Informasi</option>
                <option value="0">Pendidikan Agama Islam</option>
            </select>

            <input type="number" id="sks${i}" placeholder="Jumlah SKS" min="1">
        `;
    }
}

function hitungIP() {
    let jumlah = document.getElementById("jumlahMatkul").value;
    let totalBobot = 0;
    let totalSKS = 0;

    for (let i = 1; i <= jumlah; i++) {
        let nilai = parseFloat(document.getElementById(`nilai${i}`).value);
        let sks = parseInt(document.getElementById(`sks${i}`).value);

        totalBobot += nilai * sks;
        totalSKS += sks;
    }

    let ip = totalBobot / totalSKS;
    document.getElementById("hasil").innerText =
        "Indeks Prestasi Semester kamu adalah " + ip.toFixed(2);
}
