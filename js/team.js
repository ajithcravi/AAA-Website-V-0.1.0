// Office staff name and image url
const staffDetails = [
  [
    {
      name: "Asoka Babu",
      designation: "Principal Architect",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531511/AA%20Office%20Staff%20Photos%20Final/_01-ASOKA_BABU_MORLA_PRINCIPAL_ARCHITECT_tcv66t.jpg"
    },
    {
      name: "Nagaraju Kasani",
      designation: "Principal Architect",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531511/AA%20Office%20Staff%20Photos%20Final/_02-NAGARAJU_KASANI_PRINCIPAL_ARCHITECT_by9kpv.jpg"
    },
    {
      name: "Raja Srinivas",
      designation: "Principal Architect",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531512/AA%20Office%20Staff%20Photos%20Final/_03-RAJA_SRINIVAS_KANDREGULA_PRINCIPAL_ARCHITECT_nafk6f.jpg"
    },
    {
      name: "Rajendra Prasad",
      designation: "Principal Architect",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531511/AA%20Office%20Staff%20Photos%20Final/_04-RAJENDRA_PRASAD_MALINENI_PRINCIPAL_ARCHITECT_u36lqv.jpg"
    }
  ],
  [
    {
      name: "Dhanasree",
      designation: "Senior Architect",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531508/AA%20Office%20Staff%20Photos%20Final/DHANASREE_K_SENIOR_ARCHITECT_01_cyslzn.jpg"
    },
    {
      name: "Dhinakaran",
      designation: "Senior Architect",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531508/AA%20Office%20Staff%20Photos%20Final/DHINAKARAN_R_SENIOR_ARCHITECT_02_c1vngi.jpg"
    },
    {
      name: "Harish",
      designation: "Project Architect",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531508/AA%20Office%20Staff%20Photos%20Final/HARISH_S_PROJECT_ARCHITECT_03_imdoan.jpg"
    },
    {
      name: "Kusuma",
      designation: "Project Architect",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531508/AA%20Office%20Staff%20Photos%20Final/KUSUMA_L_PROJECT_ARCHITECT_04_cx7h5o.jpg"
    },
    {
      name: "Magesh",
      designation: "Senior BIM Manager",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531509/AA%20Office%20Staff%20Photos%20Final/MAGESH_R_SENIOR_BIM_MANAGER_05_kbrtfq.jpg"
    },
    {
      name: "Nagarjun",
      designation: "Project Architect",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531509/AA%20Office%20Staff%20Photos%20Final/NAGARJUN_M_PROJECT_ARCHITECT_06_vhp0k9.jpg"
    },
    {
      name: "Prameela",
      designation: "Office Generalist",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531509/AA%20Office%20Staff%20Photos%20Final/PRAMEELA_K_HR_07_mdvoss.jpg"
    },
    {
      name: "Prasad",
      designation: "Designer & Technical",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531509/AA%20Office%20Staff%20Photos%20Final/PRASAD_J_DESIDNER___TECHNICAL_08_ihfbkg.jpg"
    },
    {
      name: "Suraj",
      designation: "Designer & Technical",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531510/AA%20Office%20Staff%20Photos%20Final/SURAJ_A_DESIGNER___TECHNICAL_09_ls0z29.jpg"
    },
    {
      name: "Tulasi",
      designation: "Designer & Technical",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531509/AA%20Office%20Staff%20Photos%20Final/TULASI_R_DESIGNER___TECHNICAL_10_zqpoad.jpg"
    },
    {
      name: "Vagdevi",
      designation: "Designer & Technical",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531511/AA%20Office%20Staff%20Photos%20Final/VAGDEVI_N_DESIGNER___TECHNICAL_11_bhbpdw.jpg"
    },
    {
      name: "Vaishnavi",
      designation: "Project Architect",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531510/AA%20Office%20Staff%20Photos%20Final/VAISHNAVI_S_PROJECT_ARCHITECT_12_dlhups.jpg"
    },
    {
      name: "Vinay",
      designation: "Project Architect",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531511/AA%20Office%20Staff%20Photos%20Final/VINAY_V_PROJECT_ARCHITECT_13_noytjn.jpg"
    }
  ],
  [
    {
      name: "George",
      designation: "Intern",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531507/AA%20Office%20Staff%20Photos%20Final/00_01_GEORGE_Z_INTERN_gb5zen.jpg"
    },
    {
      name: "Ravi",
      designation: "Intern",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531506/AA%20Office%20Staff%20Photos%20Final/00_02_Ravi_T_INTERN_eqtknc.jpg"
    },
    {
      name: "Sairam",
      designation: "Intern",
      url:
        "https://res.cloudinary.com/ajithvault/image/upload/q_auto/v1576480265/AA%20Office%20Staff%20Photos%20Final/00_04_SAIRAM_A_INTERN_g55fst.jpg"
    },
    {
      name: "Shivani",
      designation: "Intern",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531507/AA%20Office%20Staff%20Photos%20Final/00_03_SHIVANI_INTERN_fmv7q2.jpg"
    },
    {
      name: "Ujjwal",
      designation: "Intern",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531506/AA%20Office%20Staff%20Photos%20Final/00_04_UJJWAL_K.S_INTERN_hct2uv.jpg"
    },
    {
      name: "Vaishnavi",
      designation: "Intern",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531507/AA%20Office%20Staff%20Photos%20Final/00_05_VAISHNAVI_K_INTERN_ngrbrw.jpg"
    },
    {
      name: "Varshini",
      designation: "Intern",
      url:
        "http://res.cloudinary.com/ajithvault/image/upload/q_auto/v1575531506/AA%20Office%20Staff%20Photos%20Final/00_06_VARDHINI_D_INTERN_e9iwwj.jpg"
    }
  ]
];

for (i = 0; i < staffDetails.length; i++) {
  $("#teamContainer").append(`<div id="team${i}" class="team"></div>`);
  for (j = 0; j < staffDetails[i].length; j++) {
    $(`#team${i}`).append(`<div class="card teamCard">
      <img
        src=${staffDetails[i][j].url}
        class="card-img-top"
        alt="${staffDetails[i][j].name}"
      />
      <div class="teamOverlay">
      <p class="card-text nameAndDesignation">${staffDetails[i][j].name} <br/>${staffDetails[i][j].designation}</p>
    
          </div>
      
    </div>`);
  }
}
