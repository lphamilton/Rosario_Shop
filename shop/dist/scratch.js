//scratch

div.slide-up {
    height:200px;
    overflow:hidden;
  }
  div.slide-up p {
    animation: 10s slide-up;
    margin-top:0%;
  }
  
  @keyframes slide-up {
    from {
      margin-top: 100%;
      height: 300%; 
    }
  
    to {
      margin-top: 0%;
      height: 100%;
    }
  }
  </style>
  
  <div class="slide-up">
  <p>Slide up... </p>
  </div>
  