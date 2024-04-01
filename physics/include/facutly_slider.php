<section id="team" class="wow fadeInUp">
      <div class="container">
        <div class="section-header ">
          <h2></h2><h2 style="padding-top: 20px" >Faculties</h2>
        </div>
	<div class=" carousel-wrap">
          <div>
		  
	<div class="owl-carousel owl-theme"  >
	
  <?php
  
  
  for($i=1;$i<=count($links['faculty']);$i++)
  {
    ?>
    <div class="item">
      <div class="member">
        <div class="pic "><img src="<?=$links['faculty'][$i]['photo']?>" alt="">
        </div>
                <div class="details">
                  <h4><?=$links['faculty'][$i]['name']?></h4>
                  <span>Areas of Interest: <?=$links['faculty'][$i]['area_of_interest']?></span>
                  <div class="social">
                    <a href="<?=$links['faculty'][$i]['profile']?>" target="_blank"><i class="fa fa-id-card"></i></a>
                    <a href="mailto:<?=$links['faculty'][$i]['email']?>"><i class="fa fa-envelope"></i></a>
                    <a href="<?=$links['faculty'][$i]['linkedin']?>" target="_blank"><i class="fa fa-linkedin"></i></a>
                    <a href="<?=$links['faculty'][$i]['web_link']?>" target="_blank"><i class="fa fa-globe"></i></a>
                  </div>
                </div>
      </div>
    </div>
    <?php
  }
 ?>
 	</div>
	<div class="text-center">

	<button type="button" class="btn btn-primary btn-sm  customNextBtn"> &larr; </button>
	<button type="button" class="btn btn-primary btn-sm customPreBtn"> &rarr; </button>
	</div>
	
	</div>
	</div>
	</div>
	</section>