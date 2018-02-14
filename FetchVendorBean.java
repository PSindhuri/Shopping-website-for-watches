
public class FetchVendorBean implements java.io.Serializable {
	private String vname;
    private int vid;
	public FetchVendorBean() {}
	public FetchVendorBean(int vid,String vname) {
		
		this.vid = vid;
		this.vname = vname;
		

		}
		
	public int getVid() { return vid; }
	public String getVname() { return vname; }
	
	
	
	public void setVid(int v) { vid = v; }
	public void setVname(String s) { vname = s; }
	
	
	}