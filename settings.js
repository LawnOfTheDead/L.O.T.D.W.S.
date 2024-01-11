function setViewMode()
  {
    var viewMode = localStorage.getItem('view-mode');
    var body = document.getElementsByTagName('body')[0];

    body.classList.remove('dark-mode');
    body.classList.remove('rainbow-mode');

    if (viewMode)
    {
      body.classList.add(viewMode);
    }
  }

setViewMode();