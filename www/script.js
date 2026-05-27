const scriptURL = "https://script.google.com/macros/s/AKfycbydw9IQb9eB2L9lvhuB8Suon7FWSc9ZFgZ_9-hnDASVESDCcBvrwbAAWPaCGP9oG8Cp/exec";

const form = document.getElementById("weddingForm");

form.addEventListener("submit", async function(e) {

  e.preventDefault();

  const formData = new FormData(form);

  const fotoModelIG = formData.get("foto_model_dari_ig");
  const fotoBuktiTF = formData.get("foto_bukti_tf");

  const data = {};

  formData.forEach((value, key) => {

    if (value instanceof File) return;

    data[key] = value;

  });

  if (fotoModelIG && fotoModelIG.size > 0) {

    const fileData = await fileToBase64(fotoModelIG);

    data.foto_model_dari_ig_base64 = fileData.base64;
    data.foto_model_dari_ig_name = fotoModelIG.name;
    data.foto_model_dari_ig_type = fotoModelIG.type;

  }

  if (fotoBuktiTF && fotoBuktiTF.size > 0) {

    const fileData = await fileToBase64(fotoBuktiTF);

    data.foto_bukti_tf_base64 = fileData.base64;
    data.foto_bukti_tf_name = fotoBuktiTF.name;
    data.foto_bukti_tf_type = fotoBuktiTF.type;

  }

  showPopup(
    "Data sedang dikirim",
    "Mohon tunggu sebentar...",
    true
  );

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })

  .then(res => res.json())

  .then(result => {

    showPopup(
      "Pendaftaran berhasil",  
      "Cek email untuk melihat password atau klik Data Booking untuk melihat data booking.",
      false,
      true
    );

    form.reset();

    document.getElementById("previewFotoModel").style.display = "none";

    document.getElementById("previewFotoTF").style.display = "none";

  })

  .catch(error => {

    showPopup(
      "Gagal mengirim data",
      "Silakan coba lagi.",
      false
    );

    console.error(error);

  });

});

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result.split(",")[1];
      resolve({ base64 });
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

document.getElementById("fotoModelIG").addEventListener("change", function() {
  previewFoto(this, "previewFotoModel");
});

document.getElementById("fotoBuktiTF").addEventListener("change", function() {
  previewFoto(this, "previewFotoTF");
});

function previewFoto(input, previewId) {
  const preview = document.getElementById(previewId);
  const file = input.files[0];

  if (!file) {
    preview.src = "";
    preview.style.display = "none";
    return;
  }

  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";
}

 // preview foto model IG
    
 const fotoModelIG =
 document.getElementById("fotoModelIG");
 
 fotoModelIG.addEventListener("change", function(event){
 
     const file = event.target.files[0];
 
     const image =
     document.getElementById("previewFotoModel");
 
     if(!file){
 
         image.src = "";
         image.style.display = "none";
 
         return;
     }
 
     image.src = URL.createObjectURL(file);
 
     image.style.display = "block";
 
 });
 
 
 // preview bukti transfer
 
 const fotoBuktiTF =
 document.getElementById("fotoBuktiTF");
 
 fotoBuktiTF.addEventListener("change", function(event){
 
     const file = event.target.files[0];
 
     const image =
     document.getElementById("previewFotoTF");
 
     if(!file){
 
         image.src = "";
         image.style.display = "none";
 
         return;
     }
 
     image.src = URL.createObjectURL(file);
 
     image.style.display = "block";
 
 });


 function showPopup(title, text, showLoader = true, success = false){

  document.getElementById("popupTitle").innerHTML = title;

  document.getElementById("popupText").innerHTML = text;

  document.getElementById("popupStatus").style.display = "flex";

  document.getElementById("popupLoader").style.display =
      showLoader ? "block" : "none";

  const action = document.getElementById("popupAction");

  if(action){
    action.innerHTML = "";
  }

  if(success && action){

    action.innerHTML = `
      <a href="lihat-data-daftar.html" class="popup-btn primary">
        Data Booking
      </a>

      <button type="button" class="popup-btn secondary" onclick="closePopup()">
        Keluar
      </button>
    `;

  }
}

function closePopup(){

  document.getElementById("popupStatus").style.display = "none";
}

document.getElementById("popupClose").onclick = function(){

  closePopup();
};

document.getElementById("popupStatus").onclick = function(e){

  if(e.target.id === "popupStatus"){

      closePopup();
  }
};