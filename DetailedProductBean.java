
public class DetailedProductBean implements java.io.Serializable {
	private String sku, category, vendor, model, description,
		features, image,qmessage;
	private float cost, retail;
	private int quantity;
	public DetailedProductBean() {}
	public DetailedProductBean(String vendor, String category, String sku,
		String model, String description, String features,float cost, float retail,String image,int quantity,String qmessage) {
		
		this.vendor = vendor;
		this.category = category;
		this.sku = sku;
		this.model = model;
		this.description = description;
		this.features = features;
		this.cost = cost;
		this.retail = retail;
		this.image = image;
		this.quantity = quantity;
		this.qmessage=qmessage;
		}
		
	
	public String getVendor() { return vendor; }
	public String getCategory() { return category; }
	public String getSku() { return sku; }
	public String getModel() { return model; }
	public String getDescription() { return description; }
	public String getFeatures() { return features; }
	public float getCost() { return cost; }
	public float getRetail() { return retail; }
	public String getImage() { return image; }
	public int getQuantity() { return quantity; }
	public String getQmessage() { return qmessage; }
	
	public void setVendor(String s) { vendor = s; }
	public void setCategory(String s) { category = s; }
	public void setSku(String s) { sku = s; }
	public void setModel(String s) { model = s; }
	public void setDescription(String s) { description = s; }
	public void setFeatures(String s) { features = s; }
	public void setCost(float c) { cost = c; }
	public void setRetail(float r) { retail = r; } 
    public void setImage(String s) { image = s; }
    public void setQuantity(int q) { quantity = q; }	
	public void setQmessage(String s) { qmessage = s; }	
	
	}