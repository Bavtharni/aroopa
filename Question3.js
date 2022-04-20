function maximizingXor(l, r, k) {
    let max = 0;
    let xor = (a, b) => a ^ b;

    for (let i = l; i <= r; i++) {
        for (let j = i + 1; j <= r; j++) {
            if(j<=k){
            if (xor(i, j) > max){
             max = xor(i, j);
            }
        }
        }
    }
   
    return max;
    

}
    console.log(maximizingXor(2,4,8));