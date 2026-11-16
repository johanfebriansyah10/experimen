3. Analisis Big O
   Untuk countNumber():

- Time Complexity: O(n), karena membaca setiap elemen satu kali.
- Space Complexity: O(k), karena menyimpan setiap angka unik. k adalah jumlah angka unik.
  Untuk highestFrequentNumber():
- Time Complexity: O(n + k), karena menghitung frekuensi lalu memeriksa seluruh key.
- Space Complexity: O(k), karena menyimpan frequency object.
  Jika digabungkan, kompleksitas keseluruhan tetap O(n) time dan O(k) space.
