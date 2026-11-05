---
name: stadester-implement-old-tests
description: Implements old Stadestér 1.0 tests for standardised benchmarking.
---

# Step 1. Implement Old Stadestér Tests (Workflow)

The goal of this workflow is to implement a standard benchmark in /papers/stadester/benchmarks/ which may be referenced by future versions of Stadestér (current version: 1.1). The preceding version of Stadestér is known as Stadestér 1.0. The following file locations contain source files and tests:

1. E:/Active Projects/Project 2136 - Stadestér. Compiled data for tests in 1.0, and also implemented some tests.
2. /papers/stadester/old_tests/. Contains Google Colab tests for 1.0. Note that on these Google Colab tests, this was a separate environment, and not synchronised to the main Stadestér project.
3. /papers/stadester/old_papers/Stadestér 1.0 - A Global Database of 41000+ Cities From 3000BC to the Present.pdf should be decoded and read out as plaintext. This will tell you the exact tests you need to re-implement.
4. F:/Active Projects/Project 1509 - SVEA/histmap/2.data_cleaning/population_Stadester/ is where you can find Stadestér files and compilation logic for 1.1.

If any of these user directories are out of place, heuristically search the user's computer to find them.

## Step 2. Implementing Benchmarks.

Read the 1.0 PDF file and check the Testing and Validation portion. You are required to implement all of these tests at a macro-scale, meso-scale, and micro-scale, alongside corresponding visualisations. You are allowed to use other libraries to extract the necessary images to understand how visualisations look and how they can be replicated.

Reusable benchmarks should have the following data structure in /papers/stadester/benchmarks/:
- /1.compiler/ - Compiles source Stadestér data 
- /2.results/ - Contains benchmark results in JSON.
- /3.visualisations/ - Contains end visualisations and results, sorted by section.

You should ensure that end visualisations look visually identical to the ones in the paper when laid out as .png artefacts.

## Step 3. Executing Benchmarks.

Once you have finished compiling all test scripts, you should execute them in order (compiler [compile data] > results > visualisations). Inspect end results and visualisations once execution is complete.

If the results do not appear optically similar, or you suspect your benchmarks have been 1) fuzzed, 2) written incorrectly, or are 3) incomplete, you must say 'I HAVE FAILED MYSELF'. Then call /stadester-implement-old-tests. If you cannot call /stadester-implement-old-tests, proceed to Step 1.