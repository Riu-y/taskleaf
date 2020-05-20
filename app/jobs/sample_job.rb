class SampleJob < ApplicationJob
  queue_as :default

  def perform(*args)
  	Sidekiq::Logging.logger.info "サンプル処理を実行しました"
  end
end
