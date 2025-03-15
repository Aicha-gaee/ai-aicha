// Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ù†Øµ Ø§Ù„Ù…Ø­ÙÙˆØ¸ Ø¹Ù†Ø¯ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø©
window.onload = function() {
    const savedBio = localStorage.getItem('bio');
    if (savedBio) {
        document.getElementById('bio').value = savedBio;
    }
};

// Ø­ÙØ¸ Ø§Ù„Ù†Øµ ÙÙŠ Local Storage Ø¹Ù†Ø¯ Ø§Ù„Ø¶ØºØ· Ø¹Ù„Ù‰ Ø²Ø± Ø§Ù„Ø­ÙØ¸
document.getElementById('saveBtn').addEventListener('click', function() {
    const bio = document.getElementById('bio').value;
    localStorage.setItem('bio', bio);

    // Ø¥Ø¸Ù‡Ø§Ø± Ø±Ø³Ø§Ù„Ø© Ø§Ù„Ø­ÙØ¸
    const message = document.getElementById('savedMessage');
    message.classList.remove('hidden');
    setTimeout(function() {
        message.classList.add('hidden');
    }, 2000); // Ø¥Ø®ÙØ§Ø¡ Ø§Ù„Ø±Ø³Ø§Ù„Ø© Ø¨Ø¹Ø¯ Ø«Ø§Ù†ÙŠØªÙŠÙ†
});
function showContactInfo() {
    var contactInfo = document.getElementById("contact-info");
    contactInfo.style.display = contactInfo.style.display === "none" ? "block" : "none";
}
