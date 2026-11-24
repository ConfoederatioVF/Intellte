# Supplementary Information

This repository contains the necessary instructions to carry out the analyses described in the paper titled:

**Points, patterns, and predictions in archaeological settlement data: Exploring site-environment relationships of Paracas and Nasca communities in the Peruvian Andes through point pattern analysis and predictive modeling**

## Paper Authors

Giacomo Bilotti(a,b), Markus Reindel(c), Johny Isla(d), Christian Mader(e)

a Institute of Pre- and Protohistoric Archaeology, Kiel University, Kiel, Germany

b  Social Resilience Lab, Center for Humanities Computing, Aarhus University, Aarhus, Denmark

c Commission for Archaeology of Non-European Cultures, German Archaeological Institute, Bonn, Germany

d Nasca-Palpa Management Plan, Peruvian Ministry of Culture, Nasca, Peru

e ArchDepth Research Group, Bonn Center for Dependency and Slavery Studies, University of Bonn, Bonn, Germany

## Repository maintainer

Giacomo Bilotti (bilottigiacomo@gmail.com)

Institute of Pre- and Protohistoric Archaeology, Kiel University, Kiel, Germany (former)

Social Resilience Lab, Center for Humanities Computing, Aarhus University, Aarhus, Denmark (current)

## Abstract 

This paper provides a framework for studying settlement patterns during pre-Inka times in the western Andes, using Point Pattern Analysis (PPA). PPA is a very flexible statistical method widely used to investigate spatial relationships between archaeological sites, offering insights into settlement dynamics and human-environment interactions. Nevertheless, the technique has found limited application in the Andean region, partly due to data availability and historical research trajectories. This study aims to fill this gap and employs PPA to analyze settlement patterns and site-environment relationships in the Palpa valleys of the western Andes during the Paracas (800–160 BCE) and Nasca (160 BCE–620 CE) periods. Our analysis examines the spatial structure of prehispanic settlements in relation to landscape features, identifying factors influencing site location choices and their evolution over time. Furthermore, we use the results from PPA to predict site intensity in nearby regions that were only marginally investigated archaeologically in order to identify the most relevant areas for future research activity. The performance of the model proposed here is tested at different levels in order to improve our knowledge and increase the fit of the final model. The results show changes over time in the occupation of the landscape, most of which were directed towards optimizing agricultural production. However, we have also detected a strong impact of mobility during certain periods and inter-site interaction. 

## Structure of the repository

The repository folder is structured as follows:

- **README.md**: This file (repository overview).  
- **analyses.qmd**: Quarto file performing all the analyses needed for the paper. 
- **scripts/**: Contains all R scripts for data preparation, analysis, and visualisation.  
  - **covariates/**: Contains the R scripts to produce most of the covariates required for the analyses.
    - *00_area_creation.R*: Defines the area of the study.
    - *01_DEM.R*: (down)loads the DEM and processes it.
    - *01_rivers.R*: Calculates distance from rivers.
    - *02_FETE.R*: Computes the FETE LCPs following Bilotti et al. 2024 (it can be iterated to avoid crashes).
    - *03_sum_LCPs.R*: Sums the outputs of the previous scripts to get a single raster (only necessary if the previous step was iterated).
    - *04_covariates.R*: Computes slope, TPIs and distance from LCPs.  
    - *05_plot_covs.R*: Creates and saves the plots of the covariates.
  - *test_correlation_covariates.R*: Tests the autocorrelation of the different covariates.  
  - *sites_plots.R*: Creates and saves the plots for sites divided by phase.  
  - *SI_sec_5.R*: Qualitatively compares Silverman 2002 results with the ones presented in the paper.  
  - *SI_sec_6.R*: Generates the figure included in section 6 of the SI.  
  - *plot_predictive_models.R*: Generates Fig. 6 of the paper.
  - *Kres_intervals.R*: Automatically detects the interval of the Kres function that lie outside the CI. This script is called directly from the QMD when needed. 
- **data/**: Raw and derived data necessary for the paper.  
  - *raw_data*: Where raw input files should be stored.  
  - *derived_data*: Contains processed or derived datasets, including sites.  
- **csv/**: Contains the predictive model results for each site and period. 
- **Supplementary Information.pdf**: Contains the SI in PDF format.  

In GitLab, only the scripts are available. For the full SI see https://doi.org/10.5281/zenodo.14938957

### Scripts

Each script in this repository has a brief caption explaining its function. However, only the *analyses.qmd* script needs to be run to perform the analyses for the paper. Covariates and other data is provided, ready for the reader to use. If the reader intends to run the scripts on different datasets, this is the only file required.

The scripts in the covariates folder 

#### analyses.qmd

This is the main Quarto script that performs all analyses described in the paper. It is self-contained and structured to run end-to-end. Specifically, it:

- Loads archaeological sites and divides the study area into training, test, and predictive regions;

- Loads and processes environmental covariates used for point process modeling;

- Fits point process models (PPMs) and cluster process models (KPPMs) using the spatstat package;

- Evaluates model performance using Kres functions and selects the best-fitting model for each period;

- Generates predictive maps for each period and region (training, test, predictive);

- Export outputs and generates some of the figures included in the paper.

The script will automatically call helper scripts (e.g. Kres_intervals.R) as needed. Covariates and site data are already prepared and included in the Zenodo archive, so the script can be executed as-is, assuming proper directory structure and dependencies are in place.

Note: If running on Windows, make sure to replace "FORK" with "PSOCK" (or remove the type argument) when using the parallel::makeCluster() function.

<div style="border: 1px solid #f0ad4e; background-color: #fcf8e3; padding: 1em; border-radius: 5px;">

<strong>⚠️ WARNING</strong>  

The analyses presented here are <strong>computationally demanding</strong>.  

Running them on a machine with insufficient memory or processing power may result in slow performance or crashes.  

The original analyses were carried out on a system with <strong>128 GB RAM</strong>, and parallel processing was used extensively.
</div>

#### How to Run the Script

From RStudio

1. Open analyses.qmd in RStudio;
2. Make sure the working directory is set to the project root;
3. Render using the render button, via the `quarto::quarto_render("analyses.qmd")` or using the `quarto render analyses.qmd` from terminal

The `execute` `eval` and `include` options are set to `false` to prevent the script from running each chunk automatically. Set them to `true` if you want to run the entire analysis at once, or run specific chunks manually.

### Data

The data folder separates raw and derived data. All data provided here (except archaeological sites) can either be downloaded and processed or created using the included scripts. The coordinate reference system of the data is generally WGS 84 / Pseudo-Mercator (EPSG:3857). 

The raw data folder contains:

- **vectors/** folder: Raw sites in `kmz` format are stored here they were obtained from the supplementary information of Soßna (2015). The full reference is the following: Soßna, V., 2015. Climate and Settlement in Southern Peru: The Northern Río Grande de Nasca Drainage between 1500 BCE and 1532 CE, Forschungen zur Archäologie Außereuropäischer Kulturen 13. Reichert, Wiesbaden. Store the river data here, which can be downloaded from HydroSHEDS. More information on the data can be found in the SI and in Lehner, B., Grill G. (2013). https://doi.org/10.1002/hyp.9740. 

- **dem/** folder: Empty. The SRTM-90 tiles are downloaded and stored in this folder using the 01_DEM.R script. The zipped folders containing the necessary NASA Shuttle Radar Topography Mission Global 1 arc second V003 DEM (freely available upon registration at Earthdata) should be stored here.

- **silverman.csv**: This file contains the elevation data for the sites described in Silverman (2002). It is needed to run the SI_sec_5.R script. The results are discussed in the paper and the SI.

The derived data folder contains:

- **sites.gpkg**: Contains a subset and cleaned version of the site database used for the analyses of this paper.

- **area.gpkg**: Contains several layers defining the study region.

- **fits_Kres.RDS**: Contains the results of the goodness-of-fit analyses needed to reproduce some of the figures of the paper.

- **Cox_Kres.RDS**: Contains the results of the goodness-of-fit analyses of the Cox processes needed to reproduce some of the figures of the paper.

- **rasters/** folder: Stores all the covariates, ready for use. If you are only interested in the results of this paper or in reproducing/replicating the analyses, this folder and a file with sites are all you need.

- **models/** folder: Stores the results generated in the analyses.qmd script. The models are divided by period and region (training, test, and predictive).

- **dem/** folder: Empty. This folder contains the processed DEM required for creating the other covariates, as performed in the 02_FETE.R and 04_covariates.R scripts.

## Computational Environment

All analyses and code development were conducted on:

- Linux (Ubuntu 22.04.4 LTS, 64-bit): Lenovo ThinkPad P16 Gen 1, 12th Gen Intel Core i7 (24 threads), 128 GB RAM

Code was additionally tested for compatibility on:

- macOS 15.x: MacBook Pro (Apple M4 Pro, 24 GB unified memory)
- Windows 10 (64-bit): Same hardware (ThinkPad P16 Gen 1)

### Information about the R Session

R version 4.4.2 (2024-10-31)

attached base packages:
[1] stats     graphics  grDevices utils     datasets  methods   base     

loaded via a namespace (and not attached):
 [1] generics_0.1.3         spatstat.explore_3.3-2 class_7.3-23          
 [4] KernSmooth_2.23-26     tensor_1.5             spatstat.data_3.1-2   
 [7] stringi_1.8.4          lattice_0.22-5         magrittr_2.0.3        
[10] spatstat.utils_3.1-0   evaluate_1.0.3         grid_4.4.2            
[13] rprojroot_2.0.4        Matrix_1.7-2           spatstat.sparse_3.1-0 
[16] e1071_1.7-14           DBI_1.2.3              mgcv_1.9-1            
[19] spatstat.model_3.3-1   codetools_0.2-19       abind_1.4-8           
[22] cli_3.6.4              rlang_1.1.5            units_0.8-5           
[25] polyclip_1.10-7        splines_4.4.2          spatstat.univar_3.0-0 
[28] tools_4.4.2            parallel_4.4.2         deldir_2.0-4          
[31] dplyr_1.1.4            spatstat.geom_3.3-2    here_1.0.1            
[34] vctrs_0.6.5            R6_2.6.1               rpart_4.1.24          
[37] proxy_0.4-27           lifecycle_1.0.4        classInt_0.4-10       
[40] stringr_1.5.1          MASS_7.3-64            pkgconfig_2.0.3       
[43] terra_1.8-15           pillar_1.10.2          glue_1.8.0            
[46] Rcpp_1.0.14            sf_1.0-16              xfun_0.50             
[49] tibble_3.2.1           tidyselect_1.2.1       knitr_1.49            
[52] rstudioapi_0.16.0      goftest_1.2-3          spatstat.random_3.3-1 
[55] nlme_3.1-167           compiler_4.4.2         stars_0.6-6