function showContent(contentId) {
    // Hide all content sections
    var contentSections = document.querySelectorAll('#content > div');
    contentSections.forEach(function(section) {
      section.classList.remove('show');
    });

    // Show the selected content section
    var selectedSection = document.getElementById(contentId + '-content');
    selectedSection.classList.add('show');
  }