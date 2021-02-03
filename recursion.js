function isEven(n) {
    if (n < 0) { // If n is a negative number,
        n = -n; // Turn n into a postive number
    }
    if (n === 0) { // If n is 0,
        return true; // Return true
    } else if (n === 1) { // If n is 1
        return false; // Return false
    }
    else { // If n is neither one or zero, 
        return isEven(n - 2); // Keep subtracting 2 from n until n is zero or one
    }
}
