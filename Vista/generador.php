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
								<a href="index.php" class="scrolly" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-1">
									<i class="fas fa-server tm-nav-fa-icon"></i>
									<span>Repositorio de Cifrados</span>
								</a>
							</li>
							<li>
								<a href="generador.php" class="scrolly active" data-bg-img="constructive_bg_02.jpg" data-page="#tm-section-2" data-page-type="carousel">
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
								<a href="claves.php" class="scrolly" data-bg-img="constructive_bg_05.jpg" data-page="#tm-section-5">
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
							<header><h2 class="tm-text-shadow text-center">GENERADOR</h2></header>
						</div>
					</div>
					<div class="row tm-page-4-content">
						<div class="col-md-12 col-sm-12 tm-contact-col">
							<div class="contact_message">
								<div id="div-generador" class="contact-form">
									<b>Que tipo de clave deseas?</b>
									<br><br>
									<div class="form-group">
										<input type="radio" id="opcion1" name="opcion" value="1" checked>
										<label for="opcion1">Clave Aleatoria</label>
									</div>
									<div class="form-group">
										<input type="radio" id="opcion2" name="opcion" value="2">
										<label for="opcion2">Clave con mis datos</label>
									</div>
									<center>												
											<button type="button" class="btn btn-light"  onclick="div_generador()">Contuinar</button>
									</center>
								</div>
								<div id="div-generador-2" class="contact-form" style="display: none;">
									<div class="form-group" id="div-cantidad">
										<label for="">Con cuantos caracteres debe contar su clave?</label>
										<input type="number" id="cantidad" max="50" name="cantidad" class="form-control" placeholder="Cantidad caracteres" autocomplete="off" required>
									</div>
									<div class="form-group">
										<label for="">Tipo de clave:</label>
										<select id="tipo" class="form-control" style="color: #fff;height: 52px;">
											<option value="numerica" style="color: #000">Numerica</option>
											<option value="alfanumerica" style="color: #000">Alfanumerica</option>												
										</select>
									</div>
									<div class="form-group" id="difil" style="display: none;">
										<label for="">Dificultad de clave:</label>
										<select id="dificultad" class="form-control" style="color: #fff;height: 52px;">
											<option value="facil" style="color: #000">Facil</option>
											<option value="media" style="color: #000">Media</option>
											<option value="dificil" style="color: #000">Dificil</option>
										</select>
									</div>
										<center>
											<button type="button" class="btn btn-light" onclick="inicio()" style="margin-right: 10px;">Atras</button>
											<button type="button" class="btn btn-light" id="btn-generador-2" onclick="generar()">Contuinar</button>
										</center>
									</div>
								<div id="div-generador-datos" class="contact-form"  style="display: none;">
									
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
								
			<?php include('footer.php'); ?>	
			<script src="../Ajax/generador.js"></script>	