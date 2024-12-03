let currentImageIndex = 0; // الفهرس الحالي للصورة
const images = [
    "img/godofwar1.jpg",
    "img/godofwar2.jpg",
    "img/godofwar3.jpg",
    "img/godofwar4.jpg", 
    "img/godofwar5.jpg"
]; // مسارات الصور

// فتح النافذة المنبثقة مع الصورة المختارة
function openModal(index) {
    currentImageIndex = index; // تعيين الفهرس الحالي للصورة
    const modal = document.getElementById('image-modal'); // الحصول على النافذة المنبثقة
    const modalImg = document.getElementById('modal-img'); // الحصول على الصورة داخل النافذة المنبثقة
    modal.style.display = 'block'; // عرض النافذة المنبثقة
    modalImg.src = images[currentImageIndex]; // تعيين مصدر الصورة في النافذة المنبثقة
}

// إغلاق النافذة المنبثقة
function closeModal() {
    const modal = document.getElementById('image-modal'); // الحصول على النافذة المنبثقة
    modal.style.display = 'none'; // إخفاء النافذة المنبثقة
}

// تغيير الصورة (إلى اليمين أو اليسار)
function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length; // الدوران حول الصور
    const modalImg = document.getElementById('modal-img'); // الحصول على الصورة داخل النافذة المنبثقة
    modalImg.style.animation = "none"; // تعطيل الحركة مؤقتًا
    setTimeout(() => {
        modalImg.style.animation = "fadeIn 0.5s ease-in-out"; // إعادة تفعيل الحركة
        modalImg.src = images[currentImageIndex]; // تعيين مصدر الصورة الجديد
    }, 10); // تأخير صغير لتفعيل الأنيمشن بشكل صحيح
}

