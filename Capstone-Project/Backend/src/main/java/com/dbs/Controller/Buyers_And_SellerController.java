package com.dbs.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.dbs.Models.Buyers_And_Seller;
import com.dbs.Repository.Buyers_And_SellerRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/buyer_seller")
public class Buyers_And_SellerController {
	
	private final Buyers_And_SellerRepository buyer_seller_repo;
	
	@Autowired
	public Buyers_And_SellerController(Buyers_And_SellerRepository buyer_seller_repo){//, ClientRepository client_repo) {
		this.buyer_seller_repo=buyer_seller_repo;
	}
	
	@GetMapping
	public List<Buyers_And_Seller> getBuyerSellerList(){
		return buyer_seller_repo.findAll();
	}

	@PostMapping
	public Object createOrder(@RequestBody Buyers_And_Seller buyer_seller){
		if(lookup(buyer_seller))
			return "Opposite Trade Found";
		return "Opposite Trade Not Found.. Inserted into table";

	}
	private boolean lookup(Buyers_And_Seller buyer_seller) {
		List<Buyers_And_Seller> list=getBuyerSellerList();
		boolean flag=false;
		for(Buyers_And_Seller bs:list) {
			if(bs.getPrice()==buyer_seller.getPrice() 
					&& bs.getInstrument_id().equalsIgnoreCase(buyer_seller.getInstrument_id()) 
					&& !bs.getType().equalsIgnoreCase(buyer_seller.getType())) {
						
					if(bs.getQuantity()==buyer_seller.getQuantity()) {
						ClientController.updateSameAmount(bs,buyer_seller);
						deleteFromTable(bs);
						return true;
						}
					else if(bs.getQuantity()<buyer_seller.getQuantity()) {
						ClientController.updateamount1(bs,buyer_seller);
						buyer_seller.setQuantity(buyer_seller.getQuantity()-bs.getQuantity());
						deleteFromTable(bs);
						buyer_seller_repo.save(buyer_seller);
					}
					else {
						ClientController.updateamount2(bs,buyer_seller);
						bs.setQuantity(bs.getQuantity()-buyer_seller.getQuantity());
						buyer_seller_repo.save(bs);
						return true;
					}
						flag= true;
			}
		}
		buyer_seller_repo.save(buyer_seller);
		return flag;
	}
	
	private void deleteFromTable(Buyers_And_Seller bs) {
		buyer_seller_repo.delete(bs);
	}
}
