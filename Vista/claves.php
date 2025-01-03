<?php include('header.php'); ?>
	<!-- Page Content -->
	<div class="container-fluid tm-main">
		<div class="row tm-main-row">
			<div id="img1"></div>
			
			<!-- Sidebar -->
			<div id="tmSideBar" class="col-xl-3 col-lg-4 col-md-12 col-sm-12 sidebar" style="margin-bottom: 60px;padding-top: 20px;">
				
				<button id="tmMainNavToggle" class="menu-icon">&#9776;</button>
				
				<div class="inner">
					<nav id="tmMainNav" class="tm-main-nav">
						<ul>
							<li>
								<div id="img2"></div>
							</li>
							<li>
								<a href="index.php" class="scrolly" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-1">
									<i class="fas fa-server tm-nav-fa-icon"></i>
									<span>Repositorio de Cifrados</span>
								</a>
							</li>
							<li>
								<a href="generador.php" class="scrolly" data-bg-img="constructive_bg_02.jpg" data-page="#tm-section-2" data-page-type="carousel">
									<i class="fas fa-cogs tm-nav-fa-icon"></i>
									<span>Generador de Claves</span>
								</a>
							</li>							
							<li>
								<a href="cifrar.php" class="scrolly" data-bg-img="constructive_bg_03.jpg" data-page="#tm-section-3">
									<i class="fas fa-lock tm-nav-fa-icon"></i>
									<span>Cifrar Mensaje</span>
								</a>
							</li>
							<li>
								<a href="descifrar.php" class="scrolly" data-bg-img="constructive_bg_04.jpg" data-page="#tm-section-4">
									<i class="fas fa-unlock-alt tm-nav-fa-icon"></i>
									<span>Descifrar Mensaje</span>
								</a>
							</li>
							<li>
								<a href="temporal.php" class="scrolly" data-bg-img="constructive_bg_04.jpg" data-page="#tm-section-4">
									<i class="fas fa-shield-alt tm-nav-fa-icon"></i>
									<span>Cifrado y Descifrado temporal</span>
								</a>
							</li>
							<li>
								<a href="claves.php" class="scrolly active" data-bg-img="constructive_bg_05.jpg" data-page="#tm-section-5">
									<i class="fas fa-key tm-nav-fa-icon"></i>
									<span>Mis Claves</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			
			<div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 tm-content" style="margin-bottom: 60px;padding-top: 20px;">
				
					<div class="col-md-12 tm-bg-transparent-black tm-contact-box-pad">
						<div class="row mb-4">
							<div class="col-sm-12">
								<header><h2 class="tm-text-shadow text-center">MIS CLAVES</h2></header>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 col-sm-12 tm-contact-col">
							<div class="form-group row">
								<div class="col-md-6 col-sm-12">
									<input type="text" class="form-control" id="buscar" onkeyup="mostrar($('#buscar').val())" placeholder="Buscar...">
								</div>
								<div class="col-md-6 col-sm-12 text-right py-3">
									<button onclick="guardar()" class="btn btn-light">Agregar <i class="fa fa-plus"></i></button>
								</div>	
							</div>
								<div class="contact_message">
									<div class="table-responsive">
										<table class="table">
											<thead>
												<tr>
													<th>SITIO</th>
													<th>OPCIONES</th>
												</tr>
											</thead>
											<tbody id="cuerpoTabla">

											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
			
			</div>
								
			<?php include('footer.php'); ?>	
			<script src="../Ajax/claves.js"></script>	