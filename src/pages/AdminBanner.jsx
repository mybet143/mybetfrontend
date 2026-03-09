import React, { useState } from "react";
import Cropper from "react-easy-crop";

/* ================= IMAGE HELPERS ================= */

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });

const getCroppedImg = async (imageSrc, crop) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = crop.width;
  canvas.height = crop.height;

  ctx.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise((resolve) =>
    canvas.toBlob((blob) => resolve(blob), "image/jpeg")
  );
};

/* ================= COMPONENT ================= */

const AdminBanner = () => {
  const [title, setTitle] = useState("");
  const [buttons, setButtons] = useState([]);

  /* Desktop */
  const [desktopSrc, setDesktopSrc] = useState(null);
  const [desktopCrop, setDesktopCrop] = useState({ x: 0, y: 0 });
  const [desktopZoom, setDesktopZoom] = useState(1);
  const [desktopArea, setDesktopArea] = useState(null);
  const [desktopBlob, setDesktopBlob] = useState(null);
  const [desktopFocus, setDesktopFocus] = useState("center center");

  /* Tablet */
  const [tabletSrc, setTabletSrc] = useState(null);
  const [tabletCrop, setTabletCrop] = useState({ x: 0, y: 0 });
  const [tabletZoom, setTabletZoom] = useState(1);
  const [tabletArea, setTabletArea] = useState(null);
  const [tabletBlob, setTabletBlob] = useState(null);
  const [tabletFocus, setTabletFocus] = useState("center center");

  /* Mobile */
  const [mobileSrc, setMobileSrc] = useState(null);
  const [mobileCrop, setMobileCrop] = useState({ x: 0, y: 0 });
  const [mobileZoom, setMobileZoom] = useState(1);
  const [mobileArea, setMobileArea] = useState(null);
  const [mobileBlob, setMobileBlob] = useState(null);
  const [mobileFocus, setMobileFocus] = useState("center center");

  /* ================= FILE ================= */

  const handleFile = (file, setter) => {
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setter(reader.result);
  };

  const applyCrop = async (src, area, setter) => {
    if (!area) {
      alert("Adjust crop first");
      return;
    }
    const blob = await getCroppedImg(src, area);
    setter(blob);
    alert("Crop Applied ✅");
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) return alert("Login first");

    const formData = new FormData();

    if (desktopBlob) formData.append("desktop", desktopBlob);
    if (tabletBlob) formData.append("tablet", tabletBlob);
    if (mobileBlob) formData.append("mobile", mobileBlob);

    formData.append("desktopFocus", desktopFocus);
    formData.append("tabletFocus", tabletFocus);
    formData.append("mobileFocus", mobileFocus);
    formData.append("title", title);
    formData.append("buttons", JSON.stringify(buttons));

    const res = await fetch("http://localhost:8000/api/admin/banner", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData
    });

    const data = await res.json();

    if (data.success) alert("Banner Saved ✅");
    else alert(data.message || "Upload failed");
  };

  const UploadBlock = (
    label,
    src,
    setSrc,
    crop,
    setCrop,
    zoom,
    setZoom,
    area,
    setArea,
    blobSetter,
    focus,
    setFocus,
    aspect
  ) => (
    <div className="mb-12 bg-gray-800 p-6 rounded-xl">
      <h2 className="text-xl mb-4 font-bold">{label}</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFile(e.target.files[0], setSrc)}
        className="mb-4"
      />

      {src && (
        <>
          <div className="relative w-full h-[300px] bg-black rounded mb-4">
            <Cropper
              image={src}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              onCropChange={setCrop}
              onZoomChange={(z) => setZoom(Number(z))}
              onCropComplete={(_, areaPixels) => setArea(areaPixels)}
            />
          </div>

          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full mb-3"
          />

          <button
            onClick={() => applyCrop(src, area, blobSetter)}
            className="bg-yellow-500 px-4 py-2 rounded"
          >
            Apply Crop
          </button>
        </>
      )}

      <select
        value={focus}
        onChange={(e) => setFocus(e.target.value)}
        className="w-full p-2 text-black rounded mt-4"
      >
        <option value="center center">Center</option>
        <option value="top center">Top</option>
        <option value="bottom center">Bottom</option>
        <option value="center left">Left</option>
        <option value="center right">Right</option>
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-10">
      <div className="max-w-5xl mx-auto bg-[#1e293b] p-10 rounded-2xl">

        <h1 className="text-3xl font-bold mb-10">
          Responsive Banner System
        </h1>

        {UploadBlock("Desktop Banner", desktopSrc, setDesktopSrc, desktopCrop, setDesktopCrop, desktopZoom, setDesktopZoom, desktopArea, setDesktopArea, setDesktopBlob, desktopFocus, setDesktopFocus, 3 / 1)}
        {UploadBlock("Tablet Banner", tabletSrc, setTabletSrc, tabletCrop, setTabletCrop, tabletZoom, setTabletZoom, tabletArea, setTabletArea, setTabletBlob, tabletFocus, setTabletFocus, 4 / 3)}
        {UploadBlock("Mobile Banner", mobileSrc, setMobileSrc, mobileCrop, setMobileCrop, mobileZoom, setMobileZoom, mobileArea, setMobileArea, setMobileBlob, mobileFocus, setMobileFocus, 9 / 16)}

        <button
          onClick={handleSubmit}
          className="bg-green-600 px-8 py-3 rounded-xl font-bold text-lg"
        >
          Save Banner
        </button>

      </div>
    </div>
  );
};

export default AdminBanner;