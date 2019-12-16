let setImage = 1;
const projectDetails = [
  {
    projectName: "AIS Bungalows",
    client: "APCRDA",
    location: "Amaravati",
    builtArea: 540000,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567816/VJY_AIS_Bungalows/_CRDA_AISH_Ext_01_PS__Thumb_sqica4.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567821/VJY_AIS_Bungalows/CRDA_AISH_Int_01_hgi7jv.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567815/VJY_AIS_Bungalows/CRDA_AISH_Int_05_x5uk2r.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567814/VJY_AIS_Bungalows/CRDA_AISH_Int_06_pezm19.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567813/VJY_AIS_Bungalows/CRDA_AISH_Int_04_ozmsyc.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567813/VJY_AIS_Bungalows/CRDA_AISH_Int_04_ozmsyc.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567812/VJY_AIS_Bungalows/CRDA_AISH_Int_03_vmhunt.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567812/VJY_AIS_Bungalows/CRDA_AISH_Ext_01_PS_vxrsez.jpg"
    ]
  },
  {
    projectName: "Kindergarten School",
    client: "Vidyaniketan",
    location: "Bangalore",
    builtArea: 40000,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567588/BLR_Vidyaniketan%20School/_BLR_VIDY_School_Ext_01_Thumb_hdmspf.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567590/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_08_dyqyzf.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567584/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_09_u8tcum.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567583/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_10_ztywlb.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567580/BLR_Vidyaniketan%20School/_BLR_VIDY_School_Ext_01_Home_ova3hu.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567575/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_07_cwc2xd.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567570/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_00_bmlrj4.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567569/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_06_m58gsa.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567568/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_04_ng4zue.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567566/BLR_Vidyaniketan%20School/BLR_VIDY_School_Ext_05_mlqjv1.jpg"
    ]
  },
  {
    projectName: "KBR Amulya Orchid",
    client: "KBR",
    location: "Vijayawada",
    builtArea: 15000,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575989210/VJY_KBR%20Amulya%20Orchid/_VJY_KBR_Amulya_Orchid_Ext_01_Thumb_ol5gar.jpg"
    ]
  },
  {
    projectName: "Anu Orchid",
    client: "KBR",
    location: "Vijayawada",
    builtArea: 50000,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575619604/VJY_KBR%20Anu%20Orchid/_VJY_KBR_Anu_Orchid_Ext_01_Thumb-min_njblj6.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567857/VJY_KBR%20Anu%20Orchid/VJY_KBR_Anu_Orchid_Ext_00_alvx1w.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567848/VJY_KBR%20Anu%20Orchid/VJY_KBR_Anu_Orchid_Ext_01_bbtpyg.jpg"
    ]
  },
  {
    projectName: "City Square",
    client: "KBR",
    location: "Vijayawada",
    builtArea: 50000,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567870/VJY_KBR%20City%20Square/_VJY_KBR_City_Square_Ext_01_Thumb_rckwyi.jpg"
    ]
  },

  {
    projectName: "Duplex Villas",
    client: "KBR",
    location: "Vijayawada",
    builtArea: 5500,
    year: 2019,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567923/VJY_KBR%20Duplex%20Villas/_VJY_KBR_Villas_Ext_01_Thumb_pnvvz0.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567923/VJY_KBR%20Duplex%20Villas/VJY_KBR_Villas_Int_02_bmxldk.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567923/VJY_KBR%20Duplex%20Villas/VJY_KBR_Villas_Int_00_exgem6.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567921/VJY_KBR%20Duplex%20Villas/VJY_KBR_Villas_Int_01_fmg3nh.jpg"
    ]
  },
  {
    projectName: "CMP Experience Center",
    client: "CM Properties",
    location: "Vijayawada",
    builtArea: 10000,
    year: 2019,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567801/VJY_CMP%20Experiance%20Center/_CMP_EXP_CENTER_01_THumb_lqyjn0.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567810/VJY_CMP%20Experiance%20Center/CMP_EXP_CENTER_04_fsdgxd.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567800/VJY_CMP%20Experiance%20Center/CMP_EXP_CENTER_02_o4s0ev.jpg"
    ]
  },
  {
    projectName: "Tejo Murthy Apartments",
    client: "Tejo Murthy",
    location: "Vijayawada",
    builtArea: 80000,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567996/VJY_Tejo%20Murthy%20Apartments/_VJY_Tejo_Murthy_Apt_Ext_01_Thumb_xpxtcn.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567993/VJY_Tejo%20Murthy%20Apartments/VJY_Tejo_Murthy_Apt_Ext_01_y7maeg.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567993/VJY_Tejo%20Murthy%20Apartments/VJY_Tejo_Murthy_Apt_Ext_03_mikuth.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567993/VJY_Tejo%20Murthy%20Apartments/VJY_Tejo_Murthy_Apt_Ext_03_mikuth.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567990/VJY_Tejo%20Murthy%20Apartments/VJY_Tejo_Murthy_Apt_Ext_00_hnh1u1.jpg"
    ]
  },
  {
    projectName: "MVP Apartments",
    client: "Sagara Durga",
    location: "Visakhapatnam",
    builtArea: 15000,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568026/VSP_MVP%20Apts_34/_VSP_MVP_Apt_Ext_01_Thumb_jt92bz.jpg"
    ]
  },
  {
    projectName: "Highrise Appartment",
    client: "Confidential",
    location: "Hyderabad",
    builtArea: 150000,
    year: -2019,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567570/HYD_Highrise%20Apts/_HYD_Highrise_Apts_Ext_01_Thumb_fxyyu0.jpg"
    ]
  },

  {
    projectName: "Nagarbhavi Residence",
    client: "Confidential",
    location: "Bangalore",
    builtArea: 6000,
    year: 2016,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566894/BLR_Nagarbhavi%20Residence/_BLR_NAG_Res_01_Thumb_qrt8zo.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566895/BLR_Nagarbhavi%20Residence/BLR_NAG_Res_Int_01_y1b265.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566894/BLR_Nagarbhavi%20Residence/BLR_NAG_Res_Ext_00_eiqqlf.jpg"
    ]
  },
  {
    projectName: "Siri Orchid",
    client: "KBR",
    location: "Vijayawada",
    builtArea: 20000,
    year: 2019,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567924/VJY_KBR%20Siri%20Orchid/_VJY_KBR-Siri-Orchid_Ext_01_Thumb_wl3n29.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567924/VJY_KBR%20Siri%20Orchid/VJY_KBR-Siri-Orchid_Ext_00_bqfsff.jpg"
    ]
  },
  {
    projectName: "Isha Apartments",
    client: "Sagara Durga",
    location: "Visakhapatnam",
    builtArea: 50000,
    year: 2018,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568048/VSP_Isha%20Apts/_VSP_Isha_Apt_Ext_01_Thunb_qrx311.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568045/VSP_Isha%20Apts/VSP_Isha_Apt_Ext_00_kynyfd.jpg"
    ]
  },

  {
    projectName: "TSI SCHOOL",
    client: "Mr C.M Reddy",
    location: "Bangalore",
    builtArea: 1800,
    year: 2019,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566893/BLR_TSI%20School/_BLR_TSI_School_Ext_01_Thumb_ish7w4.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566893/BLR_TSI%20School/BLR_TSI_School_Ext_01_v5vr33.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566888/BLR_TSI%20School/BLR_TSI_School_Ext_00_fcvwu0.jpg"
    ]
  },
  {
    projectName: "The Address Club House",
    client: "Sagara Durga",
    location: "Visakhapatnam",
    builtArea: 50200,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568045/VSP_The%20Address_Club%20House_36/_VSP_The_Address__Club_House_Ext_01_Thumb_smzesw.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568044/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_20_yau3gh.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568044/VSP_The%20Address_Club%20House_36/_VSP_The_Address__Club_House_Ext_01_Home_zirfow.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568044/VSP_The%20Address_Club%20House_36/_VSP_The_Address__Club_House_Ext_01_Home_zirfow.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568042/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_21_doep9p.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568041/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_17_yc0pyt.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568040/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_13_u0awa9.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568039/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_15_frxzed.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568039/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_11_n9wm0r.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568038/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_12_c31bbq.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568037/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_14_y0brco.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568035/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_09_dosvzo.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568035/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_07_ev9dzg.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568034/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_10_utiljh.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568032/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_08_ahyimw.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568030/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_05_kzh0c2.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568030/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_06_y5dzjk.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575568028/VSP_The%20Address_Club%20House_36/VSP_The_Address__Club_House_Ext_03_flpilb.jpg"
    ]
  },

  {
    projectName: "SSD Mixed use complex",
    client: "Sagara Durga",
    location: "Visakhapatnam",
    builtArea: 446050,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575988763/VSP_SDD%20Mixed%20Use%20Bldg_35/VSP_SDD-Mixed_Use_Bldg_Ext_01_unuqho.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575988763/VSP_SDD%20Mixed%20Use%20Bldg_35/_VSP_SDD-Mixed_Use_Bldg_Ext_01_Thumb_nryfkd.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575988764/VSP_SDD%20Mixed%20Use%20Bldg_35/VSP_SDD-Mixed_Use_Bldg_Ext_04_jg73tv.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575988763/VSP_SDD%20Mixed%20Use%20Bldg_35/VSP_SDD-Mixed_Use_Bldg_Ext_07_uhxget.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575988762/VSP_SDD%20Mixed%20Use%20Bldg_35/VSP_SDD-Mixed_Use_Bldg_Ext_05_xkhp7b.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575988762/VSP_SDD%20Mixed%20Use%20Bldg_35/VSP_SDD-Mixed_Use_Bldg_Ext_06_q5uq9k.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575988440/VSP_SDD%20Mixed%20Use%20Bldg_35/VSP_SDD-Mixed_Use_Bldg_Ext_09_ou94fq.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575988441/VSP_SDD%20Mixed%20Use%20Bldg_35/VSP_SDD-Mixed_Use_Bldg_Ext_08_tffy0l.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575988762/VSP_SDD%20Mixed%20Use%20Bldg_35/VSP_SDD-Mixed_Use_Bldg_Ext_06_q5uq9k.jpg"
    ]
  },
  {
    projectName: "Ankura Club House",
    client: "My Home",
    location: "Hyderabad",
    builtArea: 60000,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567688/HYD_MH%20Ankura%20Club%20House/_HYD_MH_Ankura-Club-House_Int_01_Thumb_zrdhfd.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567691/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_46_pmxphc.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567684/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_38_sptj0f.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567684/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_45_n0bwn3.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567681/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_39_c3hoih.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567681/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_41_kxhtky.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567681/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_47_laf4l4.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567679/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_42_lgddjq.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567679/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_16_ik5rvx.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567679/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_40_trgnms.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567676/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_31_yvlfvf.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567679/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_16_ik5rvx.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567679/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_40_trgnms.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567676/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_31_yvlfvf.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567676/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_37_lqvol2.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567675/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_36_pvrk6w.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567675/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_35_ohfk5r.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567674/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_34_kcyehk.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567673/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_32_hhi408.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567672/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_33_ntlhmp.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567670/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_30_vrfgyk.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567668/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_28_uwn9jv.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567668/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_29_eo9oa6.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567668/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_29_eo9oa6.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567668/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_27_dfnfvz.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567666/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_19_saighp.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567663/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_23_djuw51.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567663/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_25_wtkiri.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567662/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_24_asflwi.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567662/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_22_kmu4oc.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567660/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_21_fyxni2.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567658/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_20_p0hgvc.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567658/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_00_fclzcw.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567658/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_18_u9livg.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567657/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_15_ep517o.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567656/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_17_n3akfn.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567656/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_10_v2uxvf.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567654/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_13_z21ulw.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567653/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_14_yipg5l.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567652/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_11_hoqni8.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567649/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_09_z5wywd.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567649/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_08_e3a9si.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567646/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_03_vglli5.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567646/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_05_i1uzwe.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567646/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_07_audkug.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567645/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_06_x2vmz5.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567641/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_02_zda0ry.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567641/HYD_MH%20Ankura%20Club%20House/HYD_MH_Ankura-Club-House_Int_04_knzzvv.jpg"
    ]
  },
  {
    projectName: "Krishna Bhagavan Office 1",
    client: "Krishna Bhagavan Group",
    location: "Vijayawada",
    builtArea: 6000,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575986269/VJY_Krishna%20Bhagavan%20Group%20-%20Office1/_VJY_Krishna_Group_Office-1_Ext_01_Thumb_tgwzv6.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567925/VJY_Krishna%20Bhagavan%20Group%20-%20Office1/VJY_Krishna_Group_Office-1_Ext_00_ddqqhs.jpg"
    ]
  },
  {
    projectName: "Krishna Bhagavan Office 2",
    client: "Krishna Bhagavan Group",
    location: "Vijayawada",
    builtArea: 6000,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567919/VJY_Krishna%20Bhagavan%20Group%20-%20Office2/_VJY_Krishna_Group_Office-2_Ext_01_Thumb_nua2v9.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567922/VJY_Krishna%20Bhagavan%20Group%20-%20Office2/VJY_Krishna_Group_Office-2_Ext_04_d34cfv.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567921/VJY_Krishna%20Bhagavan%20Group%20-%20Office2/VJY_Krishna_Group_Office-2_Ext_03_hmkunr.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567916/VJY_Krishna%20Bhagavan%20Group%20-%20Office2/VJY_Krishna_Group_Office-2_Ext_09_cdcoc2.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567914/VJY_Krishna%20Bhagavan%20Group%20-%20Office2/VJY_Krishna_Group_Office-2_Ext_07_fhwouq.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567913/VJY_Krishna%20Bhagavan%20Group%20-%20Office2/VJY_Krishna_Group_Office-2_Ext_08_aosnng.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567912/VJY_Krishna%20Bhagavan%20Group%20-%20Office2/VJY_Krishna_Group_Office-2_Ext_06_wdwc8j.jpg"
    ]
  },
  {
    projectName: "Divine Mercy - Indoor Stadium",
    client: "Kickstart",
    location: "Bangalore",
    builtArea: 8500,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566678/BLR_Indoor%20Stadium%20and%20courts%20for%20Kickstart/_BLR_ISACFK_Ext_01_Thumb_pqhsuy.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566679/BLR_Indoor%20Stadium%20and%20courts%20for%20Kickstart/BLR_ISACFK_Ext_01_cx0dqn.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566676/BLR_Indoor%20Stadium%20and%20courts%20for%20Kickstart/BLR_ISACFK_Ext_00_fbwegr.jpg"
    ]
  },
  {
    projectName: "Flat Interiors",
    client: "Confidential",
    location: "Bangalore",
    builtArea: 1500,
    year: 2017,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575569987/BLR_Flat%20Interiors/_BLR_Flat_Int_01_Thumb-min_ibcs02.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566684/BLR_Flat%20Interiors/BLR_Flat_Int_02_y3igju.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566683/BLR_Flat%20Interiors/BLR_Flat_Int_01_g3tkwk.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566683/BLR_Flat%20Interiors/BLR_Flat_Int_03_imhqgp.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566681/BLR_Flat%20Interiors/BLR_Flat_Int_00_g5xhta.jpg"
    ]
  },
  {
    projectName: "TSI OFFICE",
    client: "Mr C.M Reddy",
    location: "Bangalore",
    builtArea: 7000,
    year: 2019,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566900/BLR_TSI%20Office/_BLR_TSI_Office_01_Thumb_aqwimy.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566903/BLR_TSI%20Office/BLR_TSI_Office__Ext_04_w63b1t.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566901/BLR_TSI%20Office/BLR_TSI_Office__Int_03_uhtp9x.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566900/BLR_TSI%20Office/BLR_TSI_Office__Int_04_bnnhv9.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566897/BLR_TSI%20Office/BLR_TSI_Office__Int_01_zq65xd.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566896/BLR_TSI%20Office/BLR_TSI_Office__Int_02_zxyjtn.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566895/BLR_TSI%20Office/BLR_TSI_Office__Ext_01_eaugxl.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566892/BLR_TSI%20Office/BLR_TSI_Office__Ext_03_z02gft.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566891/BLR_TSI%20Office/BLR_TSI_Office__Ext_02_oesaak.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566889/BLR_TSI%20Office/_BLR_TSI_Office_01_Home_l4eidk.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566888/BLR_TSI%20Office/BLR_TSI_Office__Int_06_zb41t9.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566887/BLR_TSI%20Office/BLR_TSI_Office__Int_05_zznapx.jpg"
    ]
  },
  {
    projectName: "Mr & Mrs C.M Reddy Home",
    client: "Mr C.M Reddy",
    location: "Bangalore",
    builtArea: 6000,
    year: 2019,
    images: [
      "https://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575547114/BLR_CM%20Reddy/_BLR_CM_Reddy_Res_Int_01_Home_zctiow.jpg",
      "https://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575547105/BLR_CM%20Reddy/BLR_CM_Reddy_Res_Int_00_oat8tg.jpg",
      "https://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575547105/BLR_CM%20Reddy/BLR_CM_Reddy_Res_Int_01_ncz15v.jpg",
      "https://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575547114/BLR_CM%20Reddy/BLR_CM_Reddy_Res_Int_16_soivsn.jpg"
    ]
  },
  {
    projectName: "Mr & Mrs. Vinod Residence",
    client: "Mr.Vinod",
    location: "ELURU",
    builtArea: 3090,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575572471/ELR_Vinod%20Residence/_ELR_Vinod_Res_Ext_01_Home-min_iodbts.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567586/ELR_Vinod%20Residence/ELR_Vinod_Res_Ext_03_w9r1w2.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567583/ELR_Vinod%20Residence/ELR_Vinod_Res_Ext_06_lygmey.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567581/ELR_Vinod%20Residence/ELR_Vinod_Res_Ext_01_lszd9v.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567581/ELR_Vinod%20Residence/ELR_Vinod_Res_Ext_07_wkzfw8.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567578/ELR_Vinod%20Residence/ELR_Vinod_Res_Ext_04_ayest1.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567575/ELR_Vinod%20Residence/ELR_Vinod_Res_Ext_02_zgywab.jpg"
    ]
  },
  {
    projectName: "My Home Bhooja - interiors",
    client: "My Home",
    location: "Hyderabad",
    builtArea: 4370,
    year: 2019,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567696/HYD_MHB%20Interiors/_HYD_MHB_Int_01_Thumb_jw4hmo.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567701/HYD_MHB%20Interiors/HYD_MHB_Int_12_r9rl59.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567699/HYD_MHB%20Interiors/HYD_MHB_Int_06_fsh0tz.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567695/HYD_MHB%20Interiors/HYD_MHB_Int_10_uwrf9h.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567694/HYD_MHB%20Interiors/_HYD_MHB_Int_01_Home_imzrrz.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567694/HYD_MHB%20Interiors/HYD_MHB_Int_11_plln4n.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567693/HYD_MHB%20Interiors/HYD_MHB_Int_09_kbwygw.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567692/HYD_MHB%20Interiors/HYD_MHB_Int_07_ikvbgy.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567690/HYD_MHB%20Interiors/HYD_MHB_Int_05_aiwxrn.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567688/HYD_MHB%20Interiors/HYD_MHB_Int_04_dt9hwq.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567690/HYD_MHB%20Interiors/HYD_MHB_Int_05_aiwxrn.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567688/HYD_MHB%20Interiors/HYD_MHB_Int_04_dt9hwq.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567688/HYD_MHB%20Interiors/HYD_MHB_Int_04_dt9hwq.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567688/HYD_MHB%20Interiors/HYD_MHB_Int_00_fapjl3.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567688/HYD_MHB%20Interiors/HYD_MHB_Int_00_fapjl3.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567686/HYD_MHB%20Interiors/HYD_MHB_Int_03_pat8ab.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567686/HYD_MHB%20Interiors/HYD_MHB_Int_01_mdwxol.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567686/HYD_MHB%20Interiors/HYD_MHB_Int_02_zwptju.jpg"
    ]
  },
  {
    projectName: "Mr Srinivas Residence",
    client: "Mr Srinivas",
    location: "Bangalore",
    builtArea: 9000,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575570381/BLR_Gollahalli%20Residence%20at%20Blr/_BLR_Gollahalli_Res_Int_01_Thumb_txi4ab.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566682/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_03_mttjxi.png",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566682/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_01_xxgmpk.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566678/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_15_o1zwj3.png",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566678/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_14_sv6fix.png",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566675/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_13_kk31q4.png",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566674/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Ext_02_kqkqex.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566673/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_12_ol38mx.png",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566673/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_11_upnank.png",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566672/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_02_ykwzhu.png",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566670/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_10_incex1.png",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566669/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_09_wehqa4.png",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566665/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_05_nhk8fc.png",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566664/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_00_j6vucg.png",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566662/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Int_04_b6agbd.png",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575566658/BLR_Gollahalli%20Residence%20at%20Blr/BLR_Gollahalli_Res_Ext_01_a3bdl9.jpg"
    ]
  },
  {
    projectName: "Gudivada Residence",
    client: "KBR",
    location: "Vijayawada",
    builtArea: 6000,
    year: 2020,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567859/VJY_Gudivada%20Res/_VJY_GUD_Res_Ext_01_Thumb_zyzucg.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575990695/VJY_Gudivada%20Res/VJY_GUD_Res_Ext_00_mbikmk.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575990695/VJY_Gudivada%20Res/VJY_GUD_Res_Ext_01_xu0gfa.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567860/VJY_Gudivada%20Res/VJY_GUD_Res_Ext_09_pxi9at.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567856/VJY_Gudivada%20Res/VJY_GUD_Res_Ext_08_vnrthi.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567853/VJY_Gudivada%20Res/VJY_GUD_Res_Ext_05_um6zqv.jpg"
    ]
  },
  {
    projectName: "Hatcheries",
    client: "KBR",
    location: "Ongole",
    builtArea: 120000,
    year: "",
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567638/ONG_Hatcheries/_ONG_Hatcheries_Ext_01_Thumb_c2ico0.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567650/ONG_Hatcheries/ONG_Hatcheries_Ext_02_dlnxnx.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567637/ONG_Hatcheries/ONG_Hatcheries_Ext_01_gy1uch.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567637/ONG_Hatcheries/_ONG_Hatcheries_Ext_01_Home_ixznft.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567636/ONG_Hatcheries/ONG_Hatcheries_Ext_03_bgsrtk.jpg"
    ]
  },
  {
    projectName: "Office Space",
    client: "My Home",
    location: "Mysore",
    builtArea: 35000,
    year: "",
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567635/MSR_Office%20at%20Mysore/_MSR_Office__Ext_01_Thumb_mzveeg.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567636/MSR_Office%20at%20Mysore/MSR_Office_Ext_02_j8t9kr.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567634/MSR_Office%20at%20Mysore/MSR_Office_Ext_07_l7teml.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567634/MSR_Office%20at%20Mysore/MSR_Office_Ext_06_sivnhm.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567634/MSR_Office%20at%20Mysore/MSR_Office_Ext_03_qafxzi.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567634/MSR_Office%20at%20Mysore/MSR_Office_Ext_01_x26izl.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567634/MSR_Office%20at%20Mysore/MSR_Office_Ext_04_le5cbk.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567634/MSR_Office%20at%20Mysore/MSR_Office_Ext_05_akywef.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567633/MSR_Office%20at%20Mysore/MSR_Office_Ext_00_mvt8dv.jpg"
    ]
  },
  {
    projectName: "HJ Function Hall",
    client: "KBR",
    location: "Vijayawada",
    builtArea: 12000,
    year: 2019,
    images: [
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567810/VJY_Function%20hall/_FUN_Hall_Int_01_Thumb_oe13zc.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567823/VJY_Function%20hall/FUN_Hall_Int_01_t6nqyh.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567807/VJY_Function%20hall/FUN_Hall_Int_03_sxbhkw.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567807/VJY_Function%20hall/_FUN_Hall_Int_01_Home_bneaxd.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567806/VJY_Function%20hall/FUN_Hall_Int_02_pgtnnv.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567805/VJY_Function%20hall/FUN_Hall_Int_05_jwtuhz.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567805/VJY_Function%20hall/FUN_Hall_Int_04_yixz4w.jpg",
      "https://res.cloudinary.com/dpm4kxo9p/image/upload/q_auto/v1575567803/VJY_Function%20hall/FUN_Hall_Int_00_ysvwdp.jpg"
    ]
  }
];

renderProjectTiles = () => {
  for (i = 0; i < projectDetails.length; i++) {
    if (i === 0 || i === 5 || i === 10 || i === 15 || i === 20 || i === 25) {
      $("#projectTilesContainer").append(
        `<div id="twoProjectRow${i}" class="twoProjectRow">
      <div class="card twoProjectTile">
      <img
        class="card-img-top twoProjectRowImage"
        src="${projectDetails[i].images[0]}"
        alt="project${i + 1}"
        onclick="openGallery(${i});"
      />
      <div class="twoProjectOverlay">
        <div class="twoProjectTitle">${projectDetails[i].projectName}</div>
      </div>
    </div>
    </div>`
      );
    } else if (
      i === 1 ||
      i === 6 ||
      i === 11 ||
      i === 16 ||
      i === 21 ||
      i === 26
    ) {
      $(`#twoProjectRow${i - 1}`).append(
        `
      <div class="card twoProjectTile">
      <img
        class="card-img-top twoProjectRowImage"
        src="${projectDetails[i].images[0]}"
        alt="project${i + 1}"
        onclick="openGallery(${i});"
      />
      <div class="twoProjectOverlay">
        <div class="twoProjectTitle">${projectDetails[i].projectName}</div>
      </div>
    </div>`
      );
    } else if (
      i === 2 ||
      i === 7 ||
      i === 12 ||
      i === 17 ||
      i === 22 ||
      i === 27
    ) {
      $("#projectTilesContainer").append(
        `<div id="threeProjectRow${i}" class="threeProjectRow">
      <div class="card threeProjectTile">
            <img
              class="card-img-top threeProjectRowImage"
              src="${projectDetails[i].images[0]}"
              alt="project${i + 1}"
              onclick="openGallery(${i});"
            />
            <div class="threeProjectOverlay">
            <div class="threeProjectTitle">${
              projectDetails[i].projectName
            }</div>
            </div>
          </div>
          </div>`
      );
    } else if (
      i === 3 ||
      i === 8 ||
      i === 13 ||
      i === 18 ||
      i === 23 ||
      i === 28
    ) {
      $(`#threeProjectRow${i - 1}`).append(`<div class="card threeProjectTile">
            <img
            class="card-img-top threeProjectRowImage"
            src="${projectDetails[i].images[0]}"
            alt="project${i + 1}"
            onclick="openGallery(${i});"
          />
          <div class="threeProjectOverlay">
          <div class="threeProjectTitle">${projectDetails[i].projectName}</div>
          </div>
        </div>`);
    } else if (
      i === 4 ||
      i === 9 ||
      i === 14 ||
      i === 19 ||
      i === 24 ||
      i === 29
    ) {
      $(`#threeProjectRow${i - 2}`).append(`<div class="card threeProjectTile">
            <img
            class="card-img-top threeProjectRowImage"
            src="${projectDetails[i].images[0]}"
            alt="project${i + 1}"
            onclick="openGallery(${i});"
          />
          <div class="threeProjectOverlay">
          <div class="threeProjectTitle">${projectDetails[i].projectName}</div>
          </div>
        </div>`);
    }
  }
};

renderProjectTiles();

openGallery = index => {
  let navElements = document.getElementsByClassName("regularnavItems");
  for (i = 0; i < navElements.length; i++) {
    navElements[i].style.display = "none";
  }
  document.getElementById("backnavForProjects").style.display = "inherit";
  let projectTiles = document.getElementById("projectTilesContainer");
  projectTiles.style.display = "none";
  let individualProject = document.getElementById("individualProject");
  individualProject.style.display = "flex";
  $(`#individualProject`).append(`
  <div id="gallery" class="gallery">
        <div class="card">
          <img
            id="main"
            class="card-img-top preview"
            src=""
            alt="preview"
          />
        </div>
        <div
          class="uk-position-relative uk-visible-toggle uk-light thumbnailDiv"
          tabindex="-1"
          uk-slider
        >
          <ul id="thumbnail"
            class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m "
          >
          </ul>
          <a
            class="uk-position-center-left uk-position-small thumbnailSliderArrow"
            href="#"
            uk-slidenav-previous
            uk-slider-item="previous"
          ></a>
          <a
            class="uk-position-center-right uk-position-small thumbnailSliderArrow"
            href="#"
            uk-slidenav-next
            uk-slider-item="next"
          ></a>
         </div>
  </div>
  <div class="card projectDescription">
        <div class="card-body">
          <h3>${projectDetails[index].projectName}</h3>
          <p><b>Client: </b> ${projectDetails[index].client}</p>
          <p><b>Location: </b>${projectDetails[index].location}</p>
          <p><b>Built Area: </b>${projectDetails[index].builtArea}</</p>
          <p><b>Year: </b>${projectDetails[index].year}</p>
        </div>
  `);
  for (i = 0; i < projectDetails[index].images.length; i++) {
    $("#thumbnail").append(`<li>
    <img
      id = ${i + 1}
      class="thumbnail"
      onclick="preview(this);"
      src=${projectDetails[index].images[i]}
      alt="preview"
      srcset="" 
    />
  </li>`);
  }
  sliderFunction();
};

function sliderFunction() {
  let main = document.getElementById("main");
  main.src = document.getElementById(setImage).src;
  document.getElementById(setImage).className = "thumbnail selected";
}

function preview(img) {
  document.getElementById(setImage).className = "thumbnail";
  img.className = "thumbnail selected";
  document.getElementById("main").src = img.src;
  setImage = img.id;
}
