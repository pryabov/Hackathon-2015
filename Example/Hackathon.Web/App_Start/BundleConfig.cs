using System.Web.Optimization;

namespace Hackathon.Web
{
	public class BundleConfig
	{
		// For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles)
		{
			bundles.Add(new StyleBundle("~/Content/mainCss").Include(
					  "~/Content/plugins/bootstrap/css/bootstrap.min.css",
					  "~/Content/css/style.css",
					  "~/Content/css/header-default.css",
					  "~/Content//css/footer-v1.css",
					  "~/Content/plugins/animate.css",
					  "~/Content/plugins/line-icons/line-icons.css",
					  "~/Content/plugins/font-awesome/css/font-awesome.min.css",
					  "~/Content/plugins/owl-carousel/owl-carousel/owl.carousel.css",
					  "~/Content/plugins/horizontal-parallax/css/horizontal-parallax.css",
					  "~/Content/css/custom.css"));
		}
	}
}
