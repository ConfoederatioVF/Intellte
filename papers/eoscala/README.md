# Eoscala

<div align = "center">
<img src = "https://i.postimg.cc/3ND2B1zL/crd-coat-of-arms-logo.png" height = "64">
<br><br>
<img src = "https://i.postimg.cc/hcDW33sz/81-eoscala-geopng.png" width = "100%">
<br><br>
<div align = "center">Figure 1. GDP PPP, GDP PPP per capita, Gini, and Net Income estimates for 1780AD.</div>
<br>
 
[![Join our community (Element Matrix)!](https://img.shields.io/badge/chat-on%20matrix-51bb9c?style=for-the-badge)](https://matrix.to/#/#confoederatio:matrix.confoederatio.org) [![Join our community!](https://img.shields.io/discord/548994743925997570?label=Discord&style=for-the-badge)](https://discord.gg/89kQY2KFQz) ![](https://img.shields.io/github/languages/code-size/ConfoederatioVF/Eoscala?style=for-the-badge)

</div>

## Abstract.

**Eoscala** is part of the **Naissance World Model**, a digital model of human society from 10000BC-2025AD.
- E-mail: [vf@confoederatio.org](mailto:vf@confoederatio.org)
- Collation: [Github](https://github.com/ConfoederatioVF/Collation) | [Projects](https://projects.confoederatio.org/c/Collation)
- Dataview: https://dataview.confoederatio.org
- <ins>Download:</ins>
- - Stadestér (Cities, part of Velkscala) | [Github](https://github.com/ConfoederatioVF/Stadester) | [Projects (1.1)](https://projects.confoederatio.org/c/Stadester)
- - Velkscala (Demographics) | [Github](https://github.com/ConfoederatioVF/Velkscala) | [Datavault (1.0)](https://datavault.confoederatio.org/s/44Pfgt7ya8wE77b)
- - **Eoscala (Economics)** | [Github](https://github.com/ConfoederatioVF/Eoscala) | [Datavault (1.5)](https://datavault.confoederatio.org/s/2Kytdej7ABpw4rr)
- - Atlas (Polities) | [Github](https://github.com/ConfoederatioVF/Atlas) | [Datavault (0.7)](https://datavault.confoederatio.org/s/rPntqXwCxzXg4Bk)

> [!WARNING]
> Professions currently use original estimates further back. If you would prefer, CAD-Preservés has geospatialised employment datasets from [BR Mitchell's _International Historical Statistics_](https://github.com/CAD-Preserves/br-mitchell) from 1750-2000, and the [Global Collaboratory on the History of Labour Relations](https://github.com/CAD-Preserves/global-collaboratory) for 1500-2000.

**Eoscala** is a geospatial database of economic indicators from 10000BC-2025AD, at 5-arcmin resolution. Most rasters are WGS84 Equirectangular, 4320x2160, and split into 128 timesteps: 1000-year intervals from 10000BC to 1AD, 100-year intervals from 1AD-1700AD, 10-year intervals from 1700AD-1950AD, and 1-year intervals from 1950AD-2025AD. Cells with <1 inhabitant are excluded from per capita calculations.

This is the testing and validation repository for **Eoscala**, a geospatial database on economic indicators and national accounts from 10000BC to 2025AD. Most of this work is achieved via proxy modelling. Figures and methods reports are prepared here, sorted by version. In certain cases we have chosen to preserve the statistical borders used by historians or statisticians in secondary/aggregate sources for academic purposes. Some borders may therefore be anachronistic.

For prior versions of Eoscala/Velkscala before 1.5/1.0, check the <ins>Releases</ins> tab.

## File Structure.

Percentage data is normalised from 0-1.

- `admin_modern/` - Subadministrative divisions used in Eoscala 1.5/Velkscala 1.0 processing.
  - `geocodes.csv`: ISO3 geocodes table
  - `geocodes.png`: ISO3 raster
  - `hmd.png`: Special area codes used by the [Human Mortality Database (HMD)](https://www.mortality.org/).
  - `hmd_geocodes.csv`: HMD geocodes table
  - `iso2.png`: ISO2 raster used by the [World Inequality Database (WID)](https://wid.world/).
  - `iso2_geocodes.csv`: ISO2 geocodes table
  - `iso3_ilo_geocodes.csv`: ISO3 geocodes table used by [ILOSTAT](https://ilostat.ilo.org/).
- `GDP_nominal/` - GDP (Nominal), aggregate
- `GDP_nominal_pc/` - GDP (Nominal) per capita
- `GDP_PPP/` - GDP (PPP), aggregate
- `GDP_PPP_pc/` - GDP (PPP) per capita
- `gini/` - Economic inequality. This is a composite index of assessed wealth Gini (prior to 1800AD) and income Gini (after 1800AD), since wealth Gini after 1800AD is of limited utility due to changes in financial/legal structures.
- `labourforce/` - Economically active workforce, aggregate
  - `labourforce_f_<year>.png` - Female active labourforce
  - `labourforce_m_<year>.png` - Male active labourforce
  - `labourforce_t_<year>.png` - Total active labourforce
- `LFPR/` - Labourforce Participation Rate (LFPR). Determines share of working-age cohorts active in the workforce
  - `lfpr_f_<year>.png` - Female LFPR
  - `lfpr_m_<year>.png` - Male LFPR
- `national_accounts/` - Tabular modern national and subnational accounts from 1800AD onwards.
  - **Note.** To procedurally generate `national_accounts/` rasters, you will require the usage of both the `admin_modern.js` and `wealth_income_WID.js` classes; whose configs can be modified to suit your purposes. This assumes the usage of [Vercengen](https://confoederatio.org/Vercengen/).
  - `data/` - Raw data per ISO2 country in `.csv` form. Restricted to enumeration years.
  - `metadata/` - Metadata containing variable names by subdivision and cohort indicator.
- `professions/` - Share of employment by economic activity.
  - `percentage/` - Percentage data.  
    **Note.** Summing up percentages may result in figures >100% if including those `not_in_work`.
    - `agriculture_f/m/t_<year>.png` - % of Female/Male/Total Workforce in Agriculture
    - `manufacturing_f/m/t_<year>.png` - % of Female/Male/Total Workforce in Manufacturing
    - `services_f/m/t_<year>.png` - % of Female/Male/Total Workforce in Services.
    - `informal_labour_f/m/t_<year>.png` - % of Female/Male/Total Workforce in Informal Labour.
    - `not_in_work_f/m/t_<year>.png` - % of Female/Male/Total Workforce not in work.
  - `total/` - Aggregate workforce per economic activity.
    - `agriculture_f/m/t_<year>.png` - Total Female/Male/Total Workforce in Agriculture
    - `manufacturing_f/m/t_<year>.png` - Total Female/Male/Total Workforce in Manufacturing
    - `services_f/m/t_<year>.png` - Total Female/Male/Total Workforce in Services.
    - `informal_labour_f/m/t_<year>.png` - Total Female/Male/Total Workforce in Informal Labour.
    - `not_in_work_f/m/t_<year>.png` - Total Female/Male/Total Workforce not in work.

<details>
 <summary><h2>Methodology.</h2></summary>
 <details open>
<summary><h3>GDP (Nominal) (FY$2000)</h3></summary>

Measured in FY$2000 International Dollars. Nominal conversions do not use PPP deflations and LCU conversions are anchored to the base year. Total per gridcell.

#### Methodology

Regularised Weighted Least Squares [L2] and dasymetric gravity modelling for years prior to 1800 using population weights. Per capita basis points are estimated first, then multiplied outwards per gridcell.
- Source code: [Github](https://github.com/ConfoederatioVF/Collation/tree/main/histmap/3.data_transform/GDP_PPP_pc) | [Projects](https://projects.confoederatio.org/Confoederatio/Collation/src/branch/main/histmap/3.data_transform/GDP_PPP_pc)

__Sources:__
1. [Nordhaus (1994)](https://www.nber.org/system/files/chapters/c6064/c6064.pdf) via [De Long (1998)](https://pdf.stafforini.com/delong-1998-estimating-world-gdp.pdf).
2. [Maddison Project Database (2023)](https://doi.org/10.34894/INZBF2)
3. [Kummu et al. (2025)](https://doi.org/10.1038/s41597-025-04487-x)
4. [World Bank (PPP deflators)](https://data.worldbank.org/indicator/PA.NUS.PPP)

Since GDP (Nominal) is derived analogously to GDP (PPP) with only PPP deflators applied, you should check **GDP (PPP)** for more details.

</details>

<details open>
<summary><h3>GDP per capita (Nominal) (FY$2000)</h3></summary>

Measured in FY$2000 International Dollars. Divides the GDP (Nominal) by Population (Total) per gridcell.

Normalised via Tukey's fences (log-tail normalisation). Cells with <1 inhabitant are excluded. See **GDP (Nominal)** for more details.

</details>

<details open>
<summary><h3>GDP (PPP) (FY$2000)</h3></summary>

Measured in FY$2000 International Dollars. PPP deflated and anchored to the base year. Total per gridcell.

#### Methodology

Regularised Weighted Least Squares [L2] and dasymetric gravity modelling for years prior to 1800 using population weights. Per capita basis points are estimated first, then multiplied outwards per gridcell.
- Source code: [Github](https://github.com/ConfoederatioVF/Collation/tree/main/histmap/3.data_transform/GDP_pc) | [Projects](https://projects.confoederatio.org/Confoederatio/Collation/src/branch/main/histmap/3.data_transform/GDP_pc)

__Sources:__
1. [Nordhaus (1994)](https://www.nber.org/system/files/chapters/c6064/c6064.pdf) via [De Long (1998)](https://pdf.stafforini.com/delong-1998-estimating-world-gdp.pdf).
2. [Maddison Project Database (2023)](https://doi.org/10.34894/INZBF2)
3. [Kummu et al. (2025)](https://doi.org/10.1038/s41597-025-04487-x)
4. [World Bank (PPP deflators)](https://data.worldbank.org/indicator/PA.NUS.PPP)

__Covariates used by OLS models:__
Covariates are used for both consistent training and hindcasting.
- [HYDE 3.3 (LU)](https://landuse.sites.uu.nl/hyde-project/): `conv_rangeland`, `cropland`, `grazing`, `ir_norice`, `ir_rice`, `pasture`, `rangeland`, `rf_norice`, `rf_rice`, `shifting`, `tot_irri`, `tot_rainfed`, `tot_rice`, `uopp_`
- [Velkscala 1.0](https://datavault.confoederatio.org/s/44Pfgt7ya8wE77b): `popc_`, `popd_`, `rurc_`, `urbc_`
- Delta covariates (annualised changes in Eoscala/Velkscala rasters).

</details>

<details open>
<summary><h3>GDP per capita (PPP) (FY$2000)</h3></summary>

Measured in FY$2000 International Dollars. Divides the GDP (PPP) by Population (Total) per gridcell.
Normalised via Tukey's fences (log-tail normalisation). Cells with <1 inhabitant are excluded. See **GDP (PPP)** for more details.

</details>

<details open>
<summary><h3>Gini (Composite) (%)</h3></summary>

Due to legal and proxy changes, Gini measures wealth Gini prior to 1800AD, and income Gini after 1800AD (since legal/debt distortions afterwards render wealth as a metric of inequality somewhat arbitrary).

#### Methodology

Rolling ensemble WLS model with population-weighted dasymetric gravity modelling prior to 1800AD. Clamps use Tukey's fences/log-tail normalisation to preserve spatial variance within countries.
- Source code: [Github](https://github.com/ConfoederatioVF/Collation/tree/main/histmap/2.data_cleaning/gini_OLS) | [Projects](https://projects.confoederatio.org/Confoederatio/Collation/src/branch/main/histmap/2.data_cleaning/gini_OLS)

__Sources:__
- Prior to 1800AD: [GINI Project Database](https://doi.org/10.48512/XCV8502429) and others
- 1800AD-1990AD: [Gapminder](https://www.gapminder.org/data/documentation/gini/) and [World Inequality Database (WID)](https://wid.world/)
- After 1990AD: [SubNGini](https://wdrg.aalto.fi/income-inequality-explorer/) by [Chrisendo et al. (2025)](https://doi.org/10.1038/s41893-025-01689-4)

<details>
<summary>View 34 other sources</summary>

1. [Aboagye & Bolt (2018)](https://doi.org/10.1016/j.eeh.2021.101405)
2. [Alfani (2021)](https://doi.org/10.1257/jel.20191449)
3. [Alfani et al. (2025)](https://doi.org/10.1038/s41467-025-58581-0)
4. [Alfania and Carballo (2023)](https://doi.org/10.1038/s41562-023-01636-3)
5. [Astorga-Junqueira (2017)](https://doi.org/10.1007/s11698-016-0150-9)
6. [Basri and Lawrence (2020)](https://www.cambridge.org/core/journals/cambridge-archaeological-journal/article/abs/wealth-inequality-in-the-ancient-near-east-a-preliminary-assessment-using-gini-coefficients-and-household-size/26E4D7CF79B5CEAEE7CDE5ED9C75E8ED)
7. [Battistoni and Martinez (2025)](https://doi.org/10.1111/roiw.70001)
8. [Beretola et al. (2010)](https://doi.org/10.1017/S021261091000011X)
9. [Bigsten (1986, 2014)](https://doi.org/10.35188/UNU-WIDER/2014/847-6)
10. [Bolt & Hillborn (2016)](https://doi.org/10.1111/ehr.12326)
11. [Canbakal (2014)](https://www.semanticscholar.org/paper/Wealth-and-inequality-in-Ottoman-lands-in-the-early-Canbakal-Filiztekin/66595b39c32cf9437cbc8fc990651b311c01c18b)
12. [Caruto et al. (2024)](https://doi.org/10.1017/S0956536123000111)
13. [Castaneda-Garza & Bengtsson (2020)](https://doi.org/10.1017/S021261092400017X)
14. [Castillos (1998)](https://www.egyptologyforum.org/bbs/uruguay/Castillos,_Inequality_in_Egyptian_predynastic_cemeteries,_1998.pdf)
15. [de Haas (2021)](https://academic.oup.com/ereh/article/26/2/255/6290253)
16. [Duffy et al. (2024)](https://doi.org/10.21203/rs.3.rs-4844801/v1)
17. [Fitzgerald (2008)](https://doi.org/10.1002/jid.1511)
18. [Fourie & von Fintel (2011)](https://eprints.lse.ac.uk/113838/1/Economic_inequality_in_Latin_America_and_Africa_1650_to_1950_Can_a_comparison_of_historical_trajectories_help_to_understand_underdevelopment.pdf)
19. [Fourie & von Fintel (2011)](https://www.tandfonline.com/doi/full/10.1080/20780389.2011.582990)
20. [Furió et al (2020)](https://doi.org/10.36253/978-88-5518-053-5.14)
21. [Kohler et al. (2017)](https://www.nature.com/articles/nature24646)
22. [Kumon (2019)](https://ies.keio.ac.jp/upload/20190712appliedpaper.pdf)
23. [Meinzer (2020)](https://files.ehs.org.uk/wp-content/uploads/2020/11/29060833/2016-Conference-Booklet.pdf#page=20)
24. [Mulder et al. (2009)](https://doi.org/10.1126/science.1178336)
25. [Rodriguez Weber (2015)](https://www.colibri.udelar.edu.uy/jspui/bitstream/20.500.12008/4681/1/DOL%20UM%2036.pdf)
26. [Rodriguez Weber (2017)](https://ideas.repec.org/a/col/000093/015838.html)
27. [Smith (2022)](https://www.heritageuniversityofkerala.com/JournalPDF/Volume10/1.pdf)
28. [Stone (2018)](https://doi.org/10.2307/j.ctt20d8801)
29. [Tadei and Alfani (2019)](https://dx.doi.org/10.2139/ssrn.3494245)
30. [Thompson et al. (2021)](https://doi.org/10.1371/journal.pone.0248169)
31. [Thompson et al. (2025)](https://doi.org/10.1073/pnas.2400699121)
32. [Williamson (2009)](https://cepr.org/voxeu/columns/latin-american-inequality-1491)
33. [Williamson et al. (2008)](https://ideas.repec.org/p/afc/wpaper/08-06.html)
34. [Wronski (2022)](https://doi.org/10.1080/03585522.2022.2148736)
</details>

__Covariates used by OLS models:__
Covariates are used for both consistent training and hindcasting.
- [HYDE 3.3 (LU)](https://landuse.sites.uu.nl/hyde-project/): `conv_rangeland`, `cropland`, `grazing`, `ir_norice`, `ir_rice`, `pasture`, `rangeland`, `rf_norice`, `rf_rice`, `shifting`, `tot_irri`, `tot_rainfed`, `tot_rice`, `uopp_`
- [Velkscala 1.0](https://datavault.confoederatio.org/s/44Pfgt7ya8wE77b): `popc_`, `popd_`, `rurc_`, `urbc_`
- [Eoscala 1.5](https://datavault.confoederatio.org/s/2Kytdej7ABpw4rr): `gdp_nominal`, `gdp_pc`, `gdp_ppp`, `gdp_ppp_pc`
- Delta covariates (annualised changes in Eoscala/Velkscala rasters).

</details>

<details open>
<summary><h3>Raw Labourforce (Total)</h3></summary>

The sum total of the active workforce in both the female and male labourforce, estimated per gridcell. This is not the same as cohorts of working age (15-65), since it only takes into account the economically active labourforce (LFPR).

See **LFPR** and **Age/Sex** for more details on Methodology.

</details>

<details open>
<summary><h3>Labourforce Participation Rate (LFPR) (%)</h3></summary>

The percentage of working-age cohorts (15-65) currently economically active, stratified by sex.

#### Methodology

Rolling Weighted Least Squares (WLS) ensemble with Tukey's fences/log-tail normalisation to preserve intra-country variance. Source training data came from [Olivetti (2013)](https://www.nber.org/system/files/working_papers/w19131/w19131.pdf) and [ILOSTAT](https://ilostat.ilo.org/). Structural equations for female LFPR (modelled elastically) was derived from [Goldin (1994)](http://doi.org/10.3386/w4707).

Conversely, male LFPR was estimated to be relatively inelastic in terms of global composition; see [Costa (2000)](https://doi.org/10.1257/jep.14.4.101), [Pencavel (1986)](https://doi.org/10.1016/S1573-4463(86)01004-0) for the reasonings behind this decision.
- Source code: [Github](https://github.com/ConfoederatioVF/Collation/blob/main/histmap/2.data_cleaning/LFPR_OLS/) | [Projects](https://projects.confoederatio.org/Confoederatio/Collation/src/branch/main/histmap/2.data_cleaning/LFPR_OLS)

__Covariates used by WLS models:__
Covariates are used for both consistent training and hindcasting.
- [HYDE 3.3 (LU)](https://landuse.sites.uu.nl/hyde-project/): `conv_rangeland`, `cropland`, `grazing`, `ir_norice`, `ir_rice`, `pasture`, `rangeland`, `rf_norice`, `rf_rice`, `shifting`, `tot_irri`, `tot_rainfed`, `tot_rice`, `uopp_`
- [Velkscala 1.0](https://datavault.confoederatio.org/s/44Pfgt7ya8wE77b): `popc_`, `popd_`, `rurc_`, `urbc_`
- [Eoscala 1.5](https://datavault.confoederatio.org/s/2Kytdej7ABpw4rr): `discretionary_income`, `disposable_income`, `gdp_nominal`, `gdp_pc`, `gdp_ppp`, `gdp_ppp_pc`, `net_income`, `net_wealth`

</details>

<details open>
<summary><h3>Professions (%)</h3></summary>

Estimated sectoral breakdowns per gridcell (agriculture/manufacturing/services/informal labour). Note that labour structures without corresponding state capacity are typically treated as informal labour. This includes non-sedentary work. Those labelled __Not in Work__ are the residual for LFPR, i.e. `1 - LFPR.`

> ⚠️ **Warning.**
> Uniquely amongst Confoederal datasets, source work here currently involves the encoding of **magic numbers**, which we will be keen to remove in the future. Problem?

#### Methodology

Superlearner structure trained on disaggregated ILOSTAT, Olivetti data. This structure was pioneered by [van Dijk et al. 2022](https://doi.org/10.1371/journal.pone.0278120).
- Source code: [Github](https://github.com/ConfoederatioVF/Collation/tree/main/histmap/3.data_transform/professions) | [Projects](https://projects.confoederatio.org/Confoederatio/Collation/src/branch/main/histmap/3.data_transform/professions)

Due to the sparsity of empirical data further back, outputs from hybrid superlearners were then subjected to spatial variance algorithms anchored to estimated historical baselines and Clark-Fisher/[Chenery & Syrquin 1975](https://documents1.worldbank.org/curated/en/482491468328816108/pdf/11913.pdf) modelling, taking into account GDP per capita and urbanisation.

For industrialisation between 1750-1980, we use the estimates provided by [Bairoch 1982](https://jeeh.it/documents/5848/2-1982-international-industrialization-levels-from-1750-to-1980.pdf) as an intercept to determine shares of manufacturing.

An additive log ratio (ALR) shift is used to preserve intra-country spatial variance.

__Definitions:__
Sectors are defined based on the ILO definition.
- Agriculture: self-enclosed.
- Manufacturing: construction, manufacturing; mining and quarrying, electricity, gas, and water supply.
- Services: public administration, community, social, and other services and activities; trade, transportation, accommodation, food, business, and administrative services.
- Informal labour: labour outside a formal state structure which is generally not taxed. Hunting and gathering/non-sedentary activity falls into this definition.

__Covariates used by Superlearner models:__
Covariates are used for both consistent training and hindcasting. Superlearners are 50% OLS and 50% Random Forest. See Source Code for more details on parameters.
- [HYDE 3.3 (LU)](https://landuse.sites.uu.nl/hyde-project/): `conv_rangeland`, `cropland`, `grazing`, `ir_norice`, `ir_rice`, `pasture`, `rangeland`, `rf_norice`, `rf_rice`, `shifting`, `tot_irri`, `tot_rainfed`, `tot_rice`, `uopp_`
- [Velkscala 1.0](https://datavault.confoederatio.org/s/44Pfgt7ya8wE77b): `popc_`, `popd_`, `rurc_`, `urbc_`
- [Eoscala 1.5](https://datavault.confoederatio.org/s/2Kytdej7ABpw4rr): `discretionary_income`, `disposable_income`, `gdp_nominal`, `gdp_pc`, `gdp_ppp`, `gdp_ppp_pc`, `gini`, `lfpr_f`, `lfpr_m`, `net_income`, `net_wealth`
- Delta covariates (annualised changes in Eoscala/Velkscala rasters).

</details>

<details open>
<summary><h3>Professions (Total workforce in the selected occupation(s))</h3></summary>

The total amount of workers in the given sector (agriculture/manufacturing/services/informal labour). Not in work constitutes the population of working age not actively in employment (1 - LFPR), defined as cohorts aged 15-65 (ILO/World Bank definition), stratified by sex. This currently has the weakness of excluding some forms of child labour in earlier periods.

See methodology in **Professions (%)** for more details.

</details>

<details open>
<summary><h3>Wealth/Income (FY$2000, average household in gridcell)</h3></summary>

Per household fiscal statistics, modelled in average terms per gridcell. Note that national accounts for certain places was incomplete, and for such regions, regional fallbacks were used for training. 

#### Methodology

National accounts data was compiled from the [World Inequality Database (WID)](http://wid.world/) and BR Mitchell's [_International Historical Statistics_](https://link.springer.com/series/13993) (ISSN: 2947-1583). Training for wealth/income relied on Regularised Least Squares [L2] and Tukey's fences, log-tail normalisation.

LCU deflators were borrowed from the [World Bank](https://data.worldbank.org/indicator/NY.GDP.DEFL.ZS.AD). After disaggregation, such data served as training targets for discrete WLS models.
- Source code: [Github](https://github.com/ConfoederatioVF/Collation/tree/main/histmap/3.data_transform/wealth_income) | [Projects](https://projects.confoederatio.org/Confoederatio/Collation/src/branch/main/histmap/3.data_transform/wealth_income)

__Definitions:__
- Net wealth: `ahweali992`: (Net personal wealth)
- Net income: `aptinci992`: (Pre-tax national income)
- Disposable income: `adiinci992`: (Post-tax national income)
- Discretionary income: `asavhoi992` + `aindgoi992`: (Savings rate + government-provided services)

__Covariates used by WLS models:__
Covariates are used for both consistent training and hindcasting.
- [HYDE 3.3 (LU)](https://landuse.sites.uu.nl/hyde-project/): `conv_rangeland`, `cropland`, `grazing`, `ir_norice`, `ir_rice`, `pasture`, `rangeland`, `rf_norice`, `rf_rice`, `shifting`, `tot_irri`, `tot_rainfed`, `tot_rice`, `uopp_`
- [Velkscala 1.0](https://datavault.confoederatio.org/s/44Pfgt7ya8wE77b): `popc_`, `popd_`, `rurc_`, `urbc_`
- [Eoscala 1.5](https://datavault.confoederatio.org/s/2Kytdej7ABpw4rr): `gdp_nominal`, `gdp_pc`, `gdp_ppp`, `gdp_ppp_pc`, `gini`
- Delta covariates (annualised changes in Eoscala/Velkscala rasters).

</details>
</details>
</details>
