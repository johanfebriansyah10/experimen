function twoSum(nums, target) {
    const map = new Map(); // Menyimpan { value: index }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Cek apakah pelengkap sudah ada di map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Simpan nilai saat ini dan indeksnya ke map
        map.set(nums[i], i);
    }

    return [];
}

console.log(twoSum([1, 4, 5, 6, 7,], 8))