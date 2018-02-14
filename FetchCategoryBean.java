
public class FetchCategoryBean implements java.io.Serializable {
	private String cname;
    private int cid;
	public FetchCategoryBean() {}
	public FetchCategoryBean(int cid,String cname) {
		
		this.cid = cid;
		this.cname = cname;
		

		}
		
	public int getCid() { return cid; }
	public String getCname() { return cname; }
	
	
	
	public void setCid(int c) { cid = c; }
	public void setCname(String s) { cname = s; }
	
	
	}