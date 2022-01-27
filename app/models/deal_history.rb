class DealHistory < ApplicationRecord
  self.inheritance_column = :_type_disabled
  self.table_name = "deals_history"
  belongs_to :deal
  belongs_to :site
end
