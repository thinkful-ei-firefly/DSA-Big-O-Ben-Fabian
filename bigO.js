function hanoi(num, start, end, temp) {
  if (num === 1) {
    console.log(`Moved disc from ${start} to ${end}`);
    return;
  } else {
    hanoi(num - 1, start, temp, end);
    hanoi(1, start, end, temp);
    hanoi(num - 1, temp, end, start);
  }
}

hanoi(2, 'S', 'E', 'T');
// hanoi(3, 'S', 'E', 'T');
// hanoi(4, 'S', 'E', 'T');
// hanoi(5, 'S', 'E', 'T');

// n = 3

// S // 3 2 1
// T //
// E //

// n - 1 from S to T
// hanoi(2, S, T, E) => hanoi(1, S, E, T) => Move from S to E

// S // 3 2
// T //
// E // 1

// hanoi(1, S, E, T) === hanoi(2, S, T, E) => Move S to T

// S // 3
// T // 2
// E // 1

// n - 1 from T to E
// hanoi(2, T, E, S) => hanoi(1, E, T, S) => Move E to T

// S // 3
// T // 2 1
// E //

// etc.

// S //
// T // 2 1
// E // 3
