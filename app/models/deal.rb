class Deal < ApplicationRecord
  self.inheritance_column = :_type_disabled
  belongs_to :site
  has_many :deal_histories
end
