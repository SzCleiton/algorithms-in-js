import binarySearchImg from '../algorithms/binary-search/binary-search.png'
import radixSortImg from '../algorithms/radix-sort/radix-sort.png'
import bubbleSortImg from '../algorithms/bubble-sort/bubble-sort.png'
import QuicksortImg from '../algorithms/quicksort/quicksort.png'

export interface AlgorithmDataProps {
  title: string;
  description: string;
  urlImage: string;
  badges: string[];
  codeUrl: string;
}

export interface Algorithm {
  key: string
  algorithms: AlgorithmDataProps[]
}

export const algorithmData = {
  algorithms: [
    {
      title: "Radix Sort",
      description: "\tThe Radix Sort is a sorting algorithm that sorts elements based on the individual digits of their values. It operates by distributing the elements into buckets or queues based on least significant digits to most significant digits. \nThis process is repeated until all digits have been considered, resulting in an ordered list. In simpler terms, Radix Sort organizes numbers by looking at each digit separately, starting with the least significant digit and working up to the most significant digit. This is done through a series of steps where elements are grouped based on the digits in specific positions. The process is repeated until all digits have been considered, resulting in an ordered list.",
      urlImage: radixSortImg,
      badges: ["Ordering", "O(nk)", "Excellent", "Stable"],
      codeUrl: "https://gist.github.com/SzCleiton/3678c1bd54d25bd6c820dbdf07f1b71a"
    },
    {
      title: "Binary Search",
      description: "Binary Search is an efficient search algorithm used in ordered lists. It works by repeatedly dividing the list in half and comparing the target element with the element in the middle of the list. Based on the comparison, the algorithm discards the half where the target element cannot be, reducing the search space by half. This process is repeated until the desired element is found or it is determined that it is not in the list. \nBinary Search has a time complexity of O(log n), which makes it fast for large lists. This is one of the most efficient search algorithms, however, it is worth remembering that the list must be ordered in advance.",
      urlImage: binarySearchImg,
      badges: ["Search", "O(log n)", "Excellent"],
      codeUrl: "https://gist.github.com/SzCleiton/1b2c057abafe99e0556ed5e39220e3bb"
    },
    {
      title: "Quicksort",
      description: 'Quicksort is a satisfactory sorting algorithm based on the "divide and conquer" strategy. Although its average efficiency is considered good, it is unstable, which means that the relative order of identical elements may vary after sorting. This property may be relevant in contexts that require the specific preservation of order between equal elements. Considering BigO (worst case), it ends up being inefficient, however, its performance is, on average, satisfactory.',
      urlImage: QuicksortImg,
      badges: ["Ordering", "O(n^2)", "Inefficient", "Non-Stable"],
      codeUrl: "https://gist.github.com/SzCleiton/e7da3170997ece2495904807be9e7c08"
    },
    {
      title: "Bubble Sort",
      description: "Bubble Sort is a simple sorting algorithm that repeatedly goes through the list, compares adjacent elements with the idea of ​​two pointers pointing to two items, and swaps them if they are in the wrong order. This process is repeated until no swaps are needed, indicating that the list is sorted. Bubble Sort is easy to understand, but it is not efficient for large data sets as its time complexity is O(n^2), where n is the number of elements in the list. Compared to more advanced algorithms, Bubble Sort is generally less efficient in terms of performance.",
      urlImage: bubbleSortImg,
      badges: ["Ordering", "O(n^2)", "Inefficient", "Stable"],
      codeUrl: "https://gist.github.com/SzCleiton/b4d5b0d58a625bd050fffb149a878287"
    },
  ]
};
