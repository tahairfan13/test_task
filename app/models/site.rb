class Site < ApplicationRecord
  has_many :deals
  has_many :deal_histories

  def check_listing_by_month month
    self.deals.where(listing_date: month.all_month)
  end

  def check_listing_by_year starting_date="2020-11-01".to_date, ending_date="2021-11-01".to_date
    self.deals.where(listing_date: starting_date..ending_date)
  end

  def get_deal_list starting_date="2020-11-01".to_date, ending_date="2021-11-01".to_date
    self.deals.where(listing_date: starting_date..ending_date).group("date_trunc('month', listing_date)").count.to_a
  end

  def get_average_revenue starting_date="2020-11-01".to_date, ending_date="2021-11-01".to_date
    deals = self.deals.where(listing_date: starting_date..ending_date)
    revenue = 0
    deals.each do |deal|
      revenue = revenue + deal.revenue
    end
    if revenue == 0
      revenue
    else
      revenue/deals.length
    end
  end

end
