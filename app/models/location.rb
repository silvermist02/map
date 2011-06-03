class Location < ActiveRecord::Base
	validates_presence_of :name
	validates_presence_of :lat
	validates_presence_of :long
	
	before_create :set_pending
	
	def set_pending
		self.status = "Pending" if self.status.nil?
	end
	
	def self.search(search)
		if search
			find(:all, :conditions => ['name LIKE ?', "%#{search}%"])
		else
			find(:all)
		end
	end
end
