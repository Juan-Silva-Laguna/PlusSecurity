                
				<footer class="footer-link">
					<p class="tm-copyright-text">Copyright &copy; 2018 Constructive Co. Ltd. 
                    
                    - Design: Tooplate</p>
				</footer>
			</div>	<!-- row -->			
		</div>
		<script type="text/javascript" src="../Recursos/js/jquery-3.2.1.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
		<script>
			if (screen.width<=700) {
				$('#img1').html(`<img src="../Recursos/img/logo.png" alt="logo" width="100" height="100" style="margin-left: 100px;">`);
				$('#img2').html(`<img src="../Recursos/img/logo.png" alt="logo" width="100" height="100">`);
				$('#tmSideBar').attr('style','position: fixed;');
				$('.inner').attr('style','height:500px;overflow: scroll;');
			}
			else{
				$('#img2').html(`<img src="../Recursos/img/logo.png" alt="logo" width="100" height="100">`);
			}
		
			function setupNavToggle() {

				$("#tmMainNavToggle").on("click", function(){
					$(".sidebar").toggleClass("show");
				});
			}

			$(window).on("load", function(){
				if(renderPage) {
					$('body').addClass('loaded');
					setupNavToggle();
				}	      	
			});
		</script>
	</body>
</html>