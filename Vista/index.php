<?php include('header.php'); ?>
	<!-- Page Content -->
	<div class="container-fluid tm-main">
		<div class="row tm-main-row">
			<div id="img1"></div>
			
			<!-- Sidebar -->
			<div id="tmSideBar" class="col-xl-3 col-lg-4 col-md-12 col-sm-12 sidebar">
				
				<button id="tmMainNavToggle" class="menu-icon">&#9776;</button>
				
				<div class="inner">
					<nav id="tmMainNav" class="tm-main-nav">
						<ul>
							<li>
								<div id="img2"></div>
							</li>
							<li>
								<a href="index.php" class="scrolly active" data-page="#tm-section-1">
									<i class="fas fa-server tm-nav-fa-icon"></i>
									<span>Repositorio de Cifrados</span>
								</a>
							</li>
							<li>
								<a href="generador.php" class="scrolly" data-page="#tm-section-2" data-page-type="carousel">
									<i class="fas fa-cogs tm-nav-fa-icon"></i>
									<span>Generador de Claves</span>
								</a>
							</li>							
							<li>
								<a href="cifrar.php" class="scrolly" data-page="#tm-section-3">
									<i class="fas fa-lock tm-nav-fa-icon"></i>
									<span>Cifrar Mensaje</span>
								</a>
							</li>
							<li>
								<a href="descifrar.php" class="scrolly" data-page="#tm-section-4">
									<i class="fas fa-unlock-alt tm-nav-fa-icon"></i>
									<span>Descifrar Mensaje</span>
								</a>
							</li>
							<li>
								<a href="temporal.php" class="scrolly" data-page="#tm-section-4">
									<i class="fas fa-shield-alt tm-nav-fa-icon"></i>
									<span>Cifrado y Descifrado temporal</span>
								</a>
							</li>
							<li>
								<a href="claves.php" class="scrolly" data-page="#tm-section-5">
									<i class="fas fa-key tm-nav-fa-icon"></i>
									<span>Mis Claves</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 tm-content" style="margin-bottom: 60px;padding-top: 20px;">

					<!-- section 1 -->
					<section id="tm-section-1" class="tm-section">
						<div class="ml-auto">
							<header class="mb-4"><h1 class="tm-text-shadow">Constructive Design</h1></header>
							<p class="mb-5 tm-font-big">Aenean fermentum vestibulum ipsum, ut pretium erat sodales sodales. Pellentesque quis orci vitae dui commodo sodales et ut quam. Etiam vitae egestas purus, ut malesuada enim.</p>
							<a href="#" class="btn tm-btn tm-font-big" data-nav-link="#tmNavLink2">Continue...</a> 
							<!-- data-nav-link holds the ID of nav item, which means this link should behave the same as that nav item  -->
						</div>
					</section>			
				</div>	<!-- .tm-content -->							
				<?php include('footer.php'); ?>	