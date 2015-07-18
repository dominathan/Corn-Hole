class Result < ActiveRecord::Base
  belongs_to :event
  belongs_to :team

  validates :event_id, :team_id, presence: true
  validates :team_id, uniqueness: { scope: :event }
end
